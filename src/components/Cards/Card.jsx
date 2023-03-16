import React from "react";
import styleCard from "./Cards.module.css";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

const { addFavorite, deleteFavorite } = require("../../redux/actions.js");

const Card = (props) => {
  const myFavorites = useSelector((state) => state.myFavorites);

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleAddFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      props.addFavorite(props);
    }
  };

  return (
    <div className={styleCard.containerSemi}>
      <div className={styleCard.cardContainer}>
        {isFav ? (
          <button
            className={styleCard.addFavorite}
            id="buttonAdd"
            onClick={handleAddFavorite}>
            ❤️
          </button>
        ) : (
          <button
            className={styleCard.addFavorite}
            id="buttonDelet"
            onClick={handleAddFavorite}>
            🤍
          </button>
        )}
        <button className={styleCard.borrarButton} onClick={props.onClose}>
          X
        </button>
        <img className={styleCard.imagenChar} src={props.image} alt="" />
        <Link to={`/detail/${props.id}`}>
          <h1 className={styleCard.boldText}>{props.name}</h1>
        </Link>
        <div className={styleCard.dataCharters}>
          <div className={styleCard.specie}>
            {" "}
            <h1 className={styleCard.boldText}>Specie</h1>
            <h2 className={styleCard.smallerText}>{props.species}</h2>
          </div>
          <div className={styleCard.gender}>
            {" "}
            <h1 className={styleCard.boldText}>Gender</h1>
            <h2 className={styleCard.smallerText}>{props.gender}</h2>
          </div>
          <div className={styleCard.state}>
            {" "}
            <h1 className={styleCard.boldText}>Status</h1>
            <h2 className={styleCard.smallerText}>{props.status}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    deleteFavorite: (id) => dispatch(deleteFavorite(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
