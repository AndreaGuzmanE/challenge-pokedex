import React from "react";
import PropTypes from "prop-types";
import PokemonCard from "../Card/index";
import "./Board.css";

const Board = (props) => {
  const {
    allPokemons,
    cartPokemon,
    setCartPokemon,
    addPokemon,
    removePokemon,
    pokedex,
    toggle,
    setToggle,
    setPokedex,
    setError,
    setLoading,
    modeMockApi = false,
  } = props;

  return (
    <div className="container-cards">
      {modeMockApi
        ? pokedex.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              image={pokemon.image}
              name={pokemon.name}
              id={pokemon.id}
              objectId={pokemon.objectId}
              setPokedex={setPokedex}
              setError={setError}
              setLoading={setLoading}
              modeMockApi
            />
          ))
        : allPokemons?.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              image={pokemon.image}
              name={pokemon.name}
              id={pokemon.id}
              cartPokemon={cartPokemon}
              setCartPokemon={setCartPokemon}
              addPokemon={addPokemon}
              removePokemon={removePokemon}
              pokedex={pokedex}
              toggle={toggle}
              setToggle={setToggle}
            />
          ))}
    </div>
  );
};
Board.propTypes = {
  allPokemons: PropTypes.array,
  cartPokemon: PropTypes.array,
  setCartPokemon: PropTypes.func,
  addPokemon: PropTypes.func,
  removePokemon: PropTypes.func,
  pokedex: PropTypes.array,
  toggle: PropTypes.bool,
  setToggle: PropTypes.func,
  setPokedex: PropTypes.func,
  setError: PropTypes.func,
  setLoading: PropTypes.func,
  modeMockApi: PropTypes.bool,
};

export default Board;
