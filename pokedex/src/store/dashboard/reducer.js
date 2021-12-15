import { useReducer, useContext } from "react";
import {
  SET_GET_POKEMONS,
  SUCCESS_GET_POKEMON,
  ERROR_GET_POKEMONS,
  SET_OPEN_MODAL,
  CLEAN_CART,
  ADD_POKEMON,
  BACK_DASHBOARD,
  SET_REMOVE_POKEMON,
  SET_GET_POKEDEX,
  POKEMON_DETAIL,
} from "./actionTypes";
import Context from "./context";

export const INITIAL_STATE = {
  loading: false,
  error: null,
  allPokemons: [],
  cartPokemon: [],
  pokedex: [],
  isOpen: false,
  isInPokedex: false,
  pokemon: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_GET_POKEMONS:
      return {
        ...state,
        loading: true,
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

    case POKEMON_DETAIL:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    case ERROR_GET_POKEMONS:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_POKEMON:
      return {
        ...state,
        cartPokemon: [...state.cartPokemon, action.payload],
      };

    case SET_OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };

    case BACK_DASHBOARD:
      return {
        ...state,
        isInPokedex: !state.isInPokedex,
      };
    case CLEAN_CART:
      return {
        ...state,
        cartPokemon: [],
        isOpen: false,
      };
    case SET_REMOVE_POKEMON:
      return {
        ...state,
        cartPokemon: state.cartPokemon.filter(
          (element) => element.id !== action.payload
        ),
      };
    case SET_GET_POKEDEX:
      return {
        ...state,
        pokedex: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export const useStore = () => useContext(Context);
