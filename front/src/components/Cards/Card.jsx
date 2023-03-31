import React from "react";
import styleCard from "./Cards.module.css";



import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { getFavorites, deleteFavorite } from "../../redux/actions.js";

function Card({
  id,
  name,
  species,
  gender,
  status,
  image,
  onClose,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch;

  const addFavorite = (character) => {
    axios
      .post("http://localhost:3001/rickandmorty/fav", character)
      .then((res) => console.log("ok"));
  };

  const deleteFavorite = async (id) => {
    await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
    dispatch(getFavorites());
    alert("Deleted character");
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteFavorite(id);
    } else {
      setIsFav(true);

      addFavorite({
        id,
        name,
        species,
        gender,
        status,
        image,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styleCard.containerSemi}>
      <div className={styleCard.cardContainer}>
        {isFav ? (
          <button
            className={styleCard.addFavorite}
            id="buttonAdd"
            onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button
            className={styleCard.addFavorite}
            id="buttonDelet"
            onClick={handleFavorite}>
            🤍
          </button>
        )}
        <button className={styleCard.borrarButton} onClick={() => onClose(id)}>
          X
        </button>
        <img className={styleCard.imagenChar}  style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }} src={image} alt="" />
        <Link to={`/detail/${id}`}>
          <h1 className={styleCard.boldTextName}>{name}</h1>
        </Link>
        <div className={styleCard.dataCharters}>
          <div className={styleCard.specie}>
            {" "}
            <h1 className={styleCard.boldText}>Specie</h1>
            <h2 className={styleCard.smallerText}>{species}</h2>
          </div>
          <div className={styleCard.gender}>
            {" "}
            <h1 className={styleCard.boldText}>Gender</h1>
            <h2 className={styleCard.smallerText}>{gender}</h2>
          </div>
          <div className={styleCard.state}>
            {" "}
            <h1 className={styleCard.boldText}>Status</h1>
            <h2 className={styleCard.smallerText}>{status}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
