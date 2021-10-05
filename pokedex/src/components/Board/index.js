import React from "react";
import PropTypes from "prop-types";
import PokemonCard from "../Card/index";
import "./Board.css";

const Board = (props) => {
  const { allPokemons } = props;

  return (
    <div className="container-cards">
      {allPokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            image={pokemon.image}
            name={pokemon.name}
            idPokemon={pokemon.id}
          />
        );
      })}
    </div>
  );
};
Board.propTypes = {
  allPokemons: PropTypes.array,
};

export default Board;
