import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import DetailStyle from './Detail.module.css'

const Detail = () => {

const [character, setCharacter] = useState({});

const { id } = useParams();

const navigate = useNavigate();


useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setCharacter(data);
    })
    .catch((error) => console.log(error));
  return () => setCharacter({});
}, []);

const backToHome = () => navigate("/home");

return ( <div>
  <button className={DetailStyle} onClick={backToHome}>
        Back to Home
      </button>

      <h1 className={DetailStyle.boldTextChar}>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <ul>
        <li><h1 className={DetailStyle.boldText}>Status:</h1><h2 className={DetailStyle.smallerText}> {character.status}</h2></li>
        <li><h1 className={DetailStyle.boldText}>Species:</h1> <h2 className={DetailStyle.smallerText}>{character.species}</h2></li>
        <li><h1 className={DetailStyle.boldText}>Gender:</h1><h2 className={DetailStyle.smallerText}> {character.gender}</h2></li>
        <li><h1 className={DetailStyle.boldText}>Origin:</h1> <h2 className={DetailStyle.smallerText}>{character.origin?.name}</h2></li>
      </ul>
    </div>
);
}

export default Detail;