const { ADD_CHARACTERS, DELETE_CHARACTER, FILTER, ORDER } = require("./actions");

const initialState = {
    myFavorites: [],
    allCharacters: [],
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {

    case ADD_CHARACTERS:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.allCharacters, action.payload]
      }


      case DELETE_CHARACTER:
        return {
          ...state,
          myFavorites: state.myFavorites.filter(favorite => favorite.id !== action.payload )
        } 


        case FILTER:
          const filteredCharacters = state.allCharacters.filter(character => character.gender === action.payload);
          return {
            ...state,
            myFavorites: filteredCharacters,
          }


          case ORDER:
            const orderedCharacters = [...state.allCharacters];
            if (action.payload === "Ascendente") {
              orderedCharacters.sort((a, b) => a.id - b.id);
            } else if (action.payload === "Descendiente") {
              orderedCharacters.sort((a, b) => b.id - a.id);
            }
            return {
              ...state,
              myFavorites: orderedCharacters
            }


      default:
      return {
        ...state,
      };
    }
}





export default rootReducer;