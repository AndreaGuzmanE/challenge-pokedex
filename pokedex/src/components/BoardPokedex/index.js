import React from "react";
import PropTypes from "prop-types";
import PokemonCard from "../Card";

const BoardPokedex = (props) => {
  const { pokedex } = props;
  console.log(pokedex);

  return pokedex.map((pokemon) => (
    <PokemonCard
      key={pokemon.idPokemon}
      idPokemon={pokemon.idPokemon}
      name={pokemon.name}
      image={pokemon.image}
      modeMockApi
    />
  ));
};

BoardPokedex.propTypes = {};

export default BoardPokedex;
