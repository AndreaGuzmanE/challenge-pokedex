import React from "react";
import PropTypes from "prop-types";
import PokemonCard from "../Card/index";
import SaveInPokedex from "../SaveInPokedex";
import "./Board.css";

const Board = (props) => {
  const {
    allPokemons,
    cartPokemon,
    addPokemon,
    removePokemon,
    pokedex,
    dispatch,
    setToogle,
    modeMockApi = false,
  } = props;

  return (
    <>
      {modeMockApi && pokedex?.length === 0 && <SaveInPokedex />}
      <div className="container-cards">
        {modeMockApi
          ? pokedex.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                image={pokemon.image}
                name={pokemon.name}
                id={pokemon.id}
                objectId={pokemon.objectId}
                modeMockApi
                dispatch={dispatch}
                toggle={pokemon.toggle}
                setToogle={setToogle}
              />
            ))
          : allPokemons?.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                image={pokemon.image}
                name={pokemon.name}
                id={pokemon.id}
                cartPokemon={cartPokemon}
                addPokemon={addPokemon}
                removePokemon={removePokemon}
                pokedex={pokedex}
                dispatch={dispatch}
                setToogle={setToogle}
                toggle={pokemon.toggle}
              />
            ))}
      </div>
    </>
  );
};
Board.propTypes = {
  allPokemons: PropTypes.array,
  cartPokemon: PropTypes.array,
  addPokemon: PropTypes.func,
  removePokemon: PropTypes.func,
  pokedex: PropTypes.array,
  dispatch: PropTypes.func,
  modeMockApi: PropTypes.bool,
};

export default Board;
