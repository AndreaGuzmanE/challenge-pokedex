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

export const setGetPokemons = () => {
  return {
    type: SET_GET_POKEMONS,
  };
};

export const successGetPokemons = (payload) => {
  return {
    type: SUCCESS_GET_POKEMON,
    payload,
  };
};

export const errorGetPokemons = (payload) => {
  return {
    type: ERROR_GET_POKEMONS,
    payload,
  };
};
export const addPokemon = (payload) => {
  return {
    type: ADD_POKEMON,
    payload,
  };
};

export const setOpenModal = () => {
  return {
    type: SET_OPEN_MODAL,
  };
};

export const setCleanCart = () => {
  return {
    type: CLEAN_CART,
  };
};

export const backDashboard = () => {
  return {
    type: BACK_DASHBOARD,
  };
};

export const setRemovePokemon = (payload) => {
  return {
    type: SET_REMOVE_POKEMON,
    payload,
  };
};

export const setGetPokedex = (payload) => {
  return {
    type: SET_GET_POKEDEX,
    payload,
  };
};

export const setPokemonDetail = (payload) => {
  return {
    type: POKEMON_DETAIL,
    payload,
  };
};
