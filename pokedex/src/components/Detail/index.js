import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import PokemonDetail from "../PokemonDetail";
import Message from "../MessageError";
import Loading from "../Loading";
import { useOwnContext } from "../../store/dashboard/storeApi";

const Detail = () => {
  const { error, loading, setGetPokemons, setPokemonDetail, errorGetPokemons } =
    useOwnContext();

  let { id } = useParams();

  useEffect(() => {
    setGetPokemons();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => {
        const { data } = response;
        setPokemonDetail(data);
      })
      .catch((error) => {
        errorGetPokemons(error);
      });
  }, [id]);

  return (
    <>
      {(() => {
        if (loading) {
          return <Loading />;
        } else if (error) {
          return <Message />;
        } else if (!error) {
          return <PokemonDetail />;
        }
      })()}
    </>
  );
};

export default Detail;
