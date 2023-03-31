import React from "react";
import useCharacter from "../../Hooks/useCharacter";
import DetailStyle from "./Detail.module.css";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const character = useCharacter();

  const backToHome = () => navigate("/home");

  return (
    <div>
      <button className={DetailStyle} onClick={backToHome}>
        Back to Home
      </button>

      <h1 className={DetailStyle.boldTextChar}>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <ul>
        <li>
          <h1 className={DetailStyle.boldText}>Status:</h1>
          <h2 className={DetailStyle.smallerText}> {character.status}</h2>
        </li>
        <li>
          <h1 className={DetailStyle.boldText}>Species:</h1>{" "}
          <h2 className={DetailStyle.smallerText}>{character.species}</h2>
        </li>
        <li>
          <h1 className={DetailStyle.boldText}>Gender:</h1>
          <h2 className={DetailStyle.smallerText}> {character.gender}</h2>
        </li>
        <li>
          <h1 className={DetailStyle.boldText}>Origin:</h1>{" "}
          <h2 className={DetailStyle.smallerText}>{character.origin?.name}</h2>
        </li>
      </ul>
    </div>
  );
};

export default Detail;
