import axios from "axios";
import {
  setGetPokedex,
  errorGetPokemons,
  setGetPokemons,
} from "../store/dashboard/actions";

const savePokemon = async (cartPokemon, dispatch) => {
  try {
    for await (const response of cartPokemon.map((element) => element)) {
      await axios.post(
        "https://6164b44709a29d0017c88e55.mockapi.io/api/v1/pokemons/",
        response
      );
    }
    getPokedex(dispatch);
  } catch (error) {
    dispatch(errorGetPokemons(error));
  }
};

export const getPokedex = async (dispatch) => {
  const mockApi =
    "https://6164b44709a29d0017c88e55.mockapi.io/api/v1/pokemons/";
  dispatch(setGetPokemons());
  try {
    const data = await axios.get(mockApi).then((response) => response.data);
    dispatch(setGetPokedex(data));
  } catch (error) {
    dispatch(errorGetPokemons(error));
  }
};

export const deletePokemon = async (objectId, dispatch) => {
  dispatch(setGetPokemons());
  try {
    await axios
      .delete(
        `https://6164b44709a29d0017c88e55.mockapi.io/api/v1/pokemons/${objectId}`
      )
      .then((response) => {
        return response;
      });
    getPokedex(dispatch);
  } catch (error) {
    dispatch(errorGetPokemons(error));
  }
};

export default savePokemon;
