import './App.css';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx'
import Err404 from './components/Err404/Err404.jsx';
import Form from './components/Forms/Form.jsx'
import Header from './components/Header/Header.jsx'
import Favorites from './components/Favorites/Favorites.jsx';
import Footer from './components/Footer/Footer.jsx';
import NavBar from './components/NavBar/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { username, password } from "./utils/consts.js";



/* Declaramos el estado characters y el setCharacters para definir la funcion que lo re-renderizara*/

function App () {

  
const [characters, setCharacters] = useState([]);
const [errorMessages, setErrorMessages] = useState({});
const [access, setAccess] = useState(false);
const navigate = useNavigate();



useEffect(() => {
   !access && navigate("/");
}, [access]);


/*Pasa los personajes mediante fetch y hace el chequeo de si el objeto tiene la informacion que necesitamos (eventHandlers) */

  const onSearch = (id) => {

    const URL_BASE = "http://localhost:3001";

    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((res) => res.json())
      .then((data) => { 
         if (data.name) {
          if (characters.filter((e) => e.id === data.id).length) {
            alert("Escucha Morty, odio decirte esto pero ese personaje ya lo tienes");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
         } 
        } else {
            window.alert('No hay personajes con ese ID');
         }
      });

    };

    //*Funcion que borra un personaje mediante un botón*//
  
    const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
  };

    const errors = {
      uname: "invalid username",
      pass: "invalid password",
    };

    //Funcion que maneja el inicio de sesion y sus credenciales
    const login = (userData) => {
      
      if (userData.username === username && userData.password === password) {
        setAccess(true);
        navigate("/home");
      } else {
        setErrorMessages({ name: "pass", message: errors.pass });
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };


    //Renderizar <Nav /> solo si no esta en la ruta indicada */
    const location = useLocation();
    const isLoginPage = location.pathname === '/';

  return (
    <div className='App' style={{ padding: '0px' }}>
      {!isLoginPage && <Header />}
      {!isLoginPage && <NavBar onSearch={onSearch} />}
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
        <Route path="/detail/:id" element={<Detail characters={characters} />}></Route>
        <Route path="/*" element={<Err404 />}></Route>
        <Route path="/" element={<Form login={login}/>}></Route>
        <Route path="`/`" element={<Form />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
        <Footer />
      </div>
  )
}

export default App;
