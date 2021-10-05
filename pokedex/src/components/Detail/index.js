import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loading from "../Loading";
import "./Detail.css";

const Detail = () => {

  let { idPokemon } = useParams();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`)
      .then((response) => {
        const { data } = response;
        setPokemon(data);
      })
      .catch((error) => {
        setPokemon(false);
        console.log(error);
      });
  }, [idPokemon]);

  const {
    name,
    sprites,
    abilities,
    base_experience,
    height,
    weight,
    species,
    types,
  } = pokemon;

  return (
    <>
      {sprites === undefined ? (
        <Loading />
      ) : (
        <div>
        <div className="pokemon-container">
          <h2 className="name">{name}</h2>
          <div className={`poke-${types[0].type.name}`}>
            <img
              className="img-pokemon"
              src={sprites.front_default}
              alt={name}
            />
            <img
              className="img-pokemon"
              src={sprites.back_default}
              alt={name}
            />
          </div>
          <div className="info-container">
            <div className="particular-info">
              <p>Experiencia: {base_experience}</p>
              <p>Altura: {height}</p>
              <p>Peso: {weight}</p>
              <p>Especie: {species.name}</p>
            </div>
            <div className="general-info">
              <div className="abilities">
                <p>Habilidades:</p>
                {abilities.map((abilityInfo) => {
                  const { ability } = abilityInfo;
                  return <p key={ability.name}> {`${ability.name}`}</p>;
                })}
              </div>
              <div className="types">
                <p>Tipo:</p>
                {types.map((typeInfo) => {
                  const { type } = typeInfo;
                  return <p key={type.name}> {`${type.name}`}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
      
    </>
  );
};

export default Detail;
