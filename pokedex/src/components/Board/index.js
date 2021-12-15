import React from "react";
import PropTypes from "prop-types";
import PokemonCard from "../Card/index";
import SaveInPokedex from "../SaveInPokedex";
import "./Board.css";
import { useOwnContext } from "../../store/dashboard/storeApi";

const Board = (props) => {
  const { modeMockApi, deletePokemon } = props;
  const { allPokemons, pokedex } = useOwnContext();

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
                deletePokemon={deletePokemon}
                modeMockApi
              />
            ))
          : allPokemons?.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                image={pokemon.image}
                name={pokemon.name}
                id={pokemon.id}
              />
            ))}
      </div>
    </>
  );
};
Board.propTypes = {
  deletePokemon: PropTypes.func,
  modeMockApi: PropTypes.bool,
};

export default Board;
