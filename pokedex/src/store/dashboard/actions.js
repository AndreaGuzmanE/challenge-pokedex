import {
  SET_GET_POKEMONS,
  SUCCESS_GET_POKEMON,
  ERROR_GET_POKEMONS,
  SET_OPEN_MODAL,
  ADD_POKEMON,
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

export const setOpenModal = () => {
  return {
    type: SET_OPEN_MODAL,
  };
};

export const addPokemon = (payload) => {
  return {
    type: ADD_POKEMON,
    payload,
  };
};
