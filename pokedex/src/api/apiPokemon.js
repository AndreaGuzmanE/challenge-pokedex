import axios from "axios";

const config = {
   baseURL: `https://pokeapi.co/api/v2/pokemon?limit=50`,
  // baseURL: `https://pokeapi.co/api/v/pokemon?limit=600`,
};

export default axios.create(config);
