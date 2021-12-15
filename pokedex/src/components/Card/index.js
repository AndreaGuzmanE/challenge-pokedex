import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useOwnContext } from "../../store/dashboard/storeApi";

const PokemonCard = (props) => {
  const { name, image, id, objectId, modeMockApi, deletePokemon } = props;

  const { pokedex, cartPokemon, addPokemon, setRemovePokemon } =
    useOwnContext();

  let history = useHistory();

  const handleClick = () => {
    history.push(`/detail/${id}`);
  };

  const handleClickAdd = () => {
    addPokemon({ id, name, image });
  };

  const inPokedex = pokedex?.find((element) => element.id === id);

  const handleDelete = () => {
    if (modeMockApi) {
      return deletePokemon(objectId);
    } else {
      return setRemovePokemon(id);
    }
  };

  const pokemonInCart =
    cartPokemon?.find((pokemon) => pokemon?.id === id) === undefined;

  return (
    <Card sx={{ Width: 345 }}>
      <img src={image} alt="pokemon" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        {!modeMockApi && inPokedex ? (
          <Typography sx={{ color: "#92D1B3" }} variant="h6" component="div">
            Guardado
          </Typography>
        ) : null}
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
        {pokemonInCart && !modeMockApi ? (
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
  modeMockApi: PropTypes.bool,
  deletePokemon: PropTypes.func,
};

export default PokemonCard;
