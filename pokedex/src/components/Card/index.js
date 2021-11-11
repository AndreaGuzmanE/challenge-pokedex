import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { deletePokemon } from "../../helpers/savePokemon";

const PokemonCard = (props) => {
  const {
    name,
    image,
    id,
    objectId,
    addPokemon,
    removePokemon,
    pokedex,
    cartPokemon,
    setPokedex,
    setError,
    setLoading,
    modeMockApi = false,
  } = props;
  const [toggle, setToggle] = useState(
    () => cartPokemon?.find((pokemon) => pokemon.id === id) === undefined
  );

  useEffect(() => {
    setToggle(cartPokemon?.find((pokemon) => pokemon.id === id) === undefined);
  }, [cartPokemon, id]);

  let history = useHistory();

  const handleClick = () => {
    history.push(`/detail/${id}`);
  };

  const handleClickAdd = () => {
    addPokemon(id, name, image);
  };

  const inPokedex = pokedex?.find((element) => element.id === id);

  const handleDelete = () => {
    if (modeMockApi) {
      return deletePokemon(objectId, setPokedex, setLoading, setError);
    } else {
      return removePokemon(id);
    }
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
            onClick={handleDelete}
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
  id: PropTypes.number,
  objectId: PropTypes.number,
  addPokemon: PropTypes.func,
  removePokemon: PropTypes.func,
  pokedex: PropTypes.array,
  cartPokemon: PropTypes.array,
  setPokedex: PropTypes.func,
  setError: PropTypes.func,
  setLoading: PropTypes.func,
  modeMockApi: PropTypes.bool,
};

export default PokemonCard;
