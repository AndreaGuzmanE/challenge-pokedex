import axios from "axios";

const savePokemon = async (cartPokemon, setPokedex) => {
  try {
    for await (const response of cartPokemon.map((element) => element)) {
      await axios.post(
        "https://6164b44709a29d0017c88e55.mockapi.io/api/v1/pokemons/",
        response
      );
    }
    getPokedex(setPokedex);
  } catch (error) {
    console.log(error);
  }
};

export const getPokedex = async (setPokedex) => {
  const mockApi =
    "https://6164b44709a29d0017c88e55.mockapi.io/api/v1/pokemons/";
  try {
    const data = await axios.get(mockApi).then((response) => response.data);
    setPokedex(data);
  } catch (error) {
    console.log(error);
  }
};

export default savePokemon;
