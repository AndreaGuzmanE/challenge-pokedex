import axios from "axios";

const savePokemon = async (cartPokemon, setPokedex, setLoading, setError) => {
  try {
    for await (const response of cartPokemon.map((element) => element)) {
      await axios.post(
        "https://6164b44709a29d0017c88e55.mockapi.io/api/v1/pokemons/",
        response
      );
    }
    getPokedex(setPokedex, setLoading, setError);
  } catch (error) {
    setError(error);
  }
};

export const getPokedex = async (setPokedex, setLoading, setError) => {
  const mockApi =
    "https://6164b44709a29d0017c88e55.mockapi.io/api/v1/pokemons/";
  setLoading(true);
  try {
    const data = await axios.get(mockApi).then((response) => response.data);
    setPokedex(data);
    setLoading(false);
  } catch (error) {
    setError(error);
    setLoading(false);
  }
};

export const deletePokemon = async (
  objectId,
  setPokedex,
  setLoading,
  setError
) => {
  try {
    await axios
      .delete(
        `https://6164b44709a29d0017c88e55.mockapi.io/api/v1/pokemons/${objectId}`
      )
      .then((response) => {
        return response;
      });
    getPokedex(setPokedex, setLoading, setError);
  } catch (error) {
    setError(error);
  }
};

export default savePokemon;
