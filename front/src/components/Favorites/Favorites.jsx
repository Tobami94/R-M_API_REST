import React from "react";
import styleCard from "./Favorites.module.css";
import Card from "../Cards/Card";
import { useSelector, useDispatch, connect } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = ({ filterCards, selectedGender }) => {
  const myFavorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();

  const handleOrderChange = (e) => {
    dispatch(orderCards(e.target.value));
  };

  const handleFilterChange = (e) => {
    const selectedGender = e.target.value;
    filterCards(selectedGender);
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
          value={selectedGender}
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
      {myFavorites.map(({ id, name, species, gender, status, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            status={status}
            image={image}
          />
        );
      })}
      ;
    </>
  );
};

const mapStateToProps = (state) => ({
  myFavorites: state.filteredCharacters,
  selectedGender: state.selectedGender,
});

const mapDispatchToProps = {
  filterCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
