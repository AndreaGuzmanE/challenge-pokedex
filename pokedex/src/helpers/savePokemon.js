import axios from "axios";

const savePokemon = async (cartPokemon, setPokedex, setLoading, setError) => {
   //setLoading(true);
  try {
    for await (const response of cartPokemon.map((element) => element)) {
      await axios.post(
        "https://6164b44709a29d0017c88e55.mockapi.io/api/v1/pokemons/",
        response
      );
    }
  //  setLoading(false);
    getPokedex(setPokedex, setLoading, setError);
    
  } catch (error) {
    setError(error);
    //console.log(error);
    // setLoading(false);
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
     //console.log(error);
     setLoading(false);
  }
};

export default savePokemon;
