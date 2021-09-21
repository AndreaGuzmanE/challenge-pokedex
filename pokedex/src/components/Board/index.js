/* import React from "react";
import PropTypes from "prop-types";
import PokemonCard from "../Card/index";
import "./Board.css";

const Board = (props) => {
  const { allPokemons, closeLoading } = props;
  const getURLs = allPokemons.map((element) => element.url);
  const namePokemon = allPokemons.map((pokemon, index) => pokemon.name);

  const getID = getURLs.map((urlPokemon) => {
    const url = `${urlPokemon}`;
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
    const id = url.replace(apiUrl, "").replace("/", "");
    return id;
  });

  const getPokemonImages = getID.map((id) => {
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return image;
  });

  return (
    <div>
      <div className="container-cards">
        
        {getPokemonImages.map((image, index) => {
          return (
            <div>
              <PokemonCard
                key={index}
                image={image}
                name={namePokemon}
                index={index}
              />
            </div>
          );
          
        })}
        
      </div>
    </div>
  );
};
Board.propTypes = {
  allPokemons: PropTypes.array,
};

export default Board;

*/

import React from "react";
import PropTypes from "prop-types";
import PokemonCard from "../Card/index";
import "./Board.css";

const Board = (props) => {
  const { allPokemons, getPokemonImages } = props;

  const namePokemon = allPokemons.map((pokemon) => {
    const capitalLetter = pokemon.name.charAt(0).toUpperCase();
    const string = pokemon.name.slice(1);
    return capitalLetter + string;
  });

  return (
    <div>
      <div className="container-cards">
        {getPokemonImages.map((image, index) => {
          return (
            <div>
              <PokemonCard
                key={index}
                image={image}
                name={namePokemon}
                index={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
Board.propTypes = {
  allPokemons: PropTypes.array,
  getPokemonImages: PropTypes.array,
};

export default Board;
