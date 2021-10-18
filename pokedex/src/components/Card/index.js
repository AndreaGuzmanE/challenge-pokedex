import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import pokemonAdd from "../../helpers/pokemonAdd";

import axios from "axios";

const PokemonCard = (props) => {
  const { name, image, idPokemon, cartPokemon, setCartPokemon } = props;
  const [toggle, setToggle] = useState(true);

  let history = useHistory();

  const handleClick = () => {
    history.push(`/detail/${idPokemon}`);
  };

  const handleClickAdd = () => {
    setToggle(!toggle);
    pokemonAdd(idPokemon, name, image).then((newPokemon) => {
      setCartPokemon([...cartPokemon, newPokemon]);
    });
  };

  const deletePokemon = async (cartPokemon) => {
    await axios
      .delete(
        `https://6164b44709a29d0017c88e55.mockapi.io/api/v1/pokemons/${cartPokemon[0].id}`
      )
      .then((response) => {
        console.log(response);
        setCartPokemon(
          cartPokemon.filter((pokemon) => pokemon.id !== cartPokemon.id)
        );
      });
  };

  console.log(cartPokemon);

  const handleRemove = () => {
    setToggle(!toggle);
  };

  return (
    <Card sx={{ Width: 345 }}>
      <img src={image} alt="pokemon" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          alignItems: "center",
        }}
      >
        <Button onClick={handleClick} size="small">
          Detalle
        </Button>
        {toggle ? (
          <Button
            onClick={handleClickAdd}
            variant="contained"
            color="success"
            size="small"
          >
            Agregar
          </Button>
        ) : (
          <Button
            onClick={/*handleRemove*/ deletePokemon}
            variant="contained"
            color="error"
            size="small"
          >
            Eliminar
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  idPokemon: PropTypes.number,
};

export default PokemonCard;
