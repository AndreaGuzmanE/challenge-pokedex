import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const PokemonCard = (props) => {
  const { name, image } = props;

  return (
    <Card sx={{ Width: 345 }}>
      <img src={image} alt="pokemon" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Detalle</Button>
      </CardActions>
    </Card>
  );
};
Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default PokemonCard;
