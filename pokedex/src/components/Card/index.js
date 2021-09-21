import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PokemonCard = (props) => {
  const { name, image, index } = props;

  return (
    <Card sx={{ Width: 345 }}>
      <img key={index} src={image} alt="pokemon" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name[`${index}`]}
        </Typography>
      </CardContent>
    </Card>
  );
};
Card.propTypes = {
  name: PropTypes.object,
  index: PropTypes.number,
  image: PropTypes.string,
};

export default PokemonCard;
