import {
  SET_GET_POKEMONS,
  SUCCESS_GET_POKEMON,
  ERROR_GET_POKEMONS,
  SET_OPEN_MODAL,
  ADD_POKEMON,
} from "./actionTypes";

export const INITIAL_STATE = {
  loading: false,
  error: null,
  allPokemons: [],
  cartPokemon: [],
  pokedex: [],
  open: false,
  isInPokedex: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_GET_POKEMONS:
      return {
        ...state,
        loading: true,
        error: null,
        open: false,
      };
    case SUCCESS_GET_POKEMON:
      const data = action.payload.map((element) => {
        const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
        const id = element.url.replace(apiUrl, "").replace("/", "");
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        const capitalLetter = element.name.charAt(0).toUpperCase();
        const string = element.name.slice(1);
        return {
          name: capitalLetter + string,
          image,
          id,
          url: element.url,
        };
      });
      return {
        ...state,
        loading: false,
        allPokemons: data,
      };
    case ERROR_GET_POKEMONS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_OPEN_MODAL:
      return {
        ...state,
        open: true,
      };
    case ADD_POKEMON:
      return {
        ...state,
        cartPokemon: [
          ...state.cartPokemon,
          {
            id: action.payload.id,
            name: action.payload.name,
            image: action.payload.image,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
