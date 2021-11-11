import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import PokemonDetail from "../PokemonDetail";
import Message from "../MessageError";
import Loading from "../Loading";

const Detail = () => {
  let { idPokemon } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`)
      .then((response) => {
        const { data } = response;
        setPokemon(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [idPokemon]);

  return (
    <>
      {(() => {
        if (loading) {
          return <Loading />;
        } else if (error) {
          return <Message />;
        } else if (!error) {
          return <PokemonDetail pokemon={pokemon} />;
        }
      })()}
    </>
  );
};

export default Detail;
