import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/NavBar/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx'
import Err404 from './components/Err404/Err404.jsx';
import Form from './components/Forms/Form.jsx'
import Header from './components/Header/Header.jsx'
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';



/* Declaramos el estado characters y el setCharacters para definir la funcion que lo re-renderizara*/

function App () {

const [characters, setCharacters] = useState([]);

/*Pasa los personajes mediante fetch y hace el chequeo de si el objeto tiene la informacion que necesitamos  */

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((res) => res.json())
      .then((data) => { 
        console.log(data)
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
      const filterCharc = characters.filter(character => character.id !== id)
         setCharacters(filterCharc)
    }


  return (
    <div className='App' style={{ margin: "0px" }}>
     
      <Header />
      <Nav onSearch={onSearch}  />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
        <Route path="/detail/:id" element={<Detail characters={characters} />}></Route>
        <Route path="/*" element={<Err404 />}></Route>
        <Route path="/" element={<Form />}></Route>
        <Route path="`/`" element={<Form />}></Route>
        </Routes>
      </div>
  )
}

export default App
