import React from "react";
import styleCard from "./Favorites.module.css";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const { filterCards, orderCards } = require("../../redux/actions.js");

const Favorites = (props) => {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrderChange = (e) => {
    dispatch(orderCards(e.target.value));
  };

  const handleFilterChange = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <>
    <div className={styleCard.Container}>
      <div class="text-center">
        <h1>Organiza tus personajes favoritos</h1>
        <br></br>
      </div>
        <select
          class="btn btn-primary dropdown-toggle"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
          onChange={handleOrderChange}>
          <option value="Ascendente">Upward</option>
          <option value="Descendente">Falling</option>
        </select>
             
        <select
          class="btn btn-primary dropdown-toggle"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
          onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      
      </div>
      <br></br>
      <br></br>
      {myFavorites.map((favorite) => (
        <div className={styleCard.containerSemi}>
          <div className={styleCard.cardContainer}>
            <div key={favorite.id}>
              <img
                className={styleCard.imagenChar}
                src={favorite.image}
                alt=""
              />
              <Link to={`/detail/${props.id}`}>
                <h1 className={styleCard.boldText}>{favorite.name}</h1>
              </Link>
              <div className={styleCard.dataCharters}>
                <div className={styleCard.specie}>
                  {" "}
                  <h1 className={styleCard.boldText}>Specie</h1>
                  <h2 className={styleCard.smallerText}>{favorite.species}</h2>
                </div>
                <div className={styleCard.gender}>
                  {" "}
                  <h1 className={styleCard.boldText}>Gender</h1>
                  <h2 className={styleCard.smallerText}>{favorite.gender}</h2>
                </div>
                <div className={styleCard.state}>
                  {" "}
                  <h1 className={styleCard.boldText}>Status</h1>
                  <h2 className={styleCard.smallerText}>{favorite.status}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Favorites;
