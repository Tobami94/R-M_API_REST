import React from 'react';
import ErrStyle from "./Err404.module.css"
import { useNavigate } from 'react-router-dom';


const Err404 = () => {

const navigate = useNavigate();


const backToHome = () => navigate("/home");

return (<div>
 <button className={ErrStyle} onClick={backToHome}>
        Back to Home
      </button>
      <h2>Odio este lugar Morty, no aguanto la burocracia. No me gusta que me digan a dónde he de ir o lo que tengo que hacer, es un atropello. – Rick</h2>
</div>
);

}



export default Err404;