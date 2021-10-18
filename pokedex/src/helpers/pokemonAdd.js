import axios from "axios";

const pokemonAdd = async (idPokemon, name, image) => {
  const data = {
    idPokemon,
    name,
    image,
  };
  try {
    const url = "https://6164b44709a29d0017c88e55.mockapi.io/api/v1/pokemons/";
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      data,
    };
    await axios(url, options);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default pokemonAdd;
