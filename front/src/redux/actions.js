import axios from "axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_CHARACTER = "DELETE_FAVORITE";
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_FAVORITES = "GET_FAVORITES";
export const FILTER = "FILTER";
export const ORDER = "ORDER";


/* Actions favorite characters */

export const getCharacterDetail = (id) => {
    return async function (dispatch) {
      const URL_BASE = "http://localhost:3001";
      const response = await axios.get(`${URL_BASE}/detail/${id}`);
      dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
    };
  };


  export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
  };


  export const getFavorites = () => {
    return async function (dispatch) {
      const URL_BASE = "http://localhost:3001";
      const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
      dispatch({ type: GET_FAVORITES, payload: response.data });
    };
  };
  

  
export const deleteFavorite = (id) => {
 return {
        type: "DELETE_FAVORITE",
        payload: id,
    }
};


 
/* Actions filter */


export const filterCards = (gender) => {
 return {
    type: "FILTER",
    payload: gender,
 }
};

export const orderCards = (id) => {
 return {
    type: "ORDER",
    payload: id,
 }
};