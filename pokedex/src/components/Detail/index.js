import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import PokemonDetail from "../PokemonDetail";
import Message from "../MessageError";
import Loading from "../Loading";
import {
  errorGetPokemons,
  setGetPokemons,
  setPokemonDetail,
} from "../../store/dashboard/actions";

const Detail = (props) => {
  const { error, loading, dispatch, pokemon } = props;
  let { id } = useParams();

  useEffect(() => {
    dispatch(setGetPokemons());
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => {
        const { data } = response;
        dispatch(setPokemonDetail(data));
      })
      .catch((error) => {
        dispatch(errorGetPokemons(error));
      });
  }, [id, dispatch]);

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
