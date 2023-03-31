const { ADD_FAVORITES, DELETE_CHARACTER, FILTER, ORDER, GET_CHARACTER_DETAIL, CLEAN_DETAIL, GET_FAVORITES, } = require("./actions");

const initialState = {
    myFavorites: [],
    characterDetail: [],
    selectedGender: null,
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {

    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };


      case DELETE_CHARACTER:
        return {
          ...state,
          myFavorites: state.myFavorites.filter(
            (char) => char.id !== action.payload
          ),
        };


       case GET_CHARACTER_DETAIL:
          return {
            ...state,
            characterDetail: action.payload,
          };


          case GET_FAVORITES:
            return {
              ...state,
              myFavorites: action.payload,
            };


            case CLEAN_DETAIL:
              return {
            ...state,
            characterDetail: {},
              };

              
        case FILTER:
          const selectedGender = action.payload;
          const filteredCharacters = state.myFavorites.filter(char => char.gender === selectedGender);
          return {
            ...state,
            selectedGender,
            myFavorites: filteredCharacters,
          }


          case ORDER:
            const orderedCharacters = [...state.myFavorites];
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