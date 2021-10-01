import React, { useState, useEffect } from "react";
import "./Detail.css";
import { useParams } from "react-router";
import axios from "axios";
import Loading from "../Loading";

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
        //setPokemon(false);
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
        <div className="pokemon-container">
          <div className="name">{name}</div>
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
              <p className="g-info">Habilidades:</p>
              {abilities.map((abilityInfo) => {
                const { ability } = abilityInfo;
                const { name } = ability;
                return <p key={name}> {`${name}`}</p>;
              })}
              <p className="g-info">Tipo:</p>
              {types.map((typeInfo) => {
                const { type } = typeInfo;
                const { name } = type;
                return <p key={name}> {`${name}`}</p>;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
