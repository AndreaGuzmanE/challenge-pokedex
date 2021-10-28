import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const PokemonCard = (props) => {
  const {
    name,
    image,
    idPokemon,
    addPokemon,
    removePokemon,
    pokedex,
    cartPokemon,
    modeMockApi = false,
  } = props;
  const [toggle, setToggle] = useState(
    () =>
      cartPokemon?.find((pokemon) => pokemon.idPokemon === idPokemon) ===
      undefined
  );

  useEffect(() => {
    setToggle(
      cartPokemon?.find((pokemon) => pokemon.idPokemon === idPokemon) ===
        undefined
    );
  }, [cartPokemon, idPokemon]);

  let history = useHistory();

  const handleClick = () => {
    history.push(`/detail/${idPokemon}`);
  };

  const handleClickAdd = () => {
    addPokemon(idPokemon, name, image);
  };

  const inPokedex = pokedex?.find((element) => element.idPokemon === idPokemon);

  const handleRemove = () => {
    removePokemon(idPokemon);
  };

  return (
    <Card sx={{ Width: 345 }}>
      <img src={image} alt="pokemon" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        {inPokedex && (
          <Typography sx={{ color: "#92D1B3" }} variant="h6" component="div">
            Guardado
          </Typography>
        )}
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
        {toggle && !modeMockApi ? (
          <Button
            onClick={handleClickAdd}
            disabled={!!inPokedex}
            variant="contained"
            color="success"
            size="small"
          >
            Agregar
          </Button>
        ) : (
          <Button
            onClick={handleRemove}
            disabled={!!inPokedex}
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
