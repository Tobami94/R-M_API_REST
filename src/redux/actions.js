
export const ADD_CHARACTERS = "ADD_FAVORITE";
export const DELETE_CHARACTER = "DELETE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";


/* Actions para traer los personajes */


/* Actions favorite characters */

export const addFavorite = (character) => {
 return {
        type: "ADD_FAVORITE",
        payload: character,
    }
};

export const deleteFavorite = (id) => {
 return {
        type: "DELETE_FAVORITE",
        payload: id,
    }
};

 
/* Actions filter */


export const filterCards = (status) => {
 return {
    type: "FILTER",
    payload: status,
 }
};

export const orderCards = (id) => {
 return {
    type: "ORDER",
    payload: id,
 }
};