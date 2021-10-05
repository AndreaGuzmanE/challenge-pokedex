import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const PokemonCard = (props) => {
  const { name, image, idPokemon } = props;
  let history = useHistory();
  const handleClick = () => {
    history.push(`/detail/${idPokemon}`);
  };

  return (
    <Card sx={{ Width: 345 }}>
      <img src={image} alt="pokemon" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="small">
          Detalle
        </Button>
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
