import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./Detail/Detail.css";
import { useOwnContext } from "../store/dashboard/storeApi";

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: "#dcdcdc66",
    color: "#2F4F4F",
    "&:hover": {
      backgroundColor: "#D6EAF8",
    },
  },
  name: {
    textTransform: "uppercase",
  },
}));

const PokemonDetail = () => {
  const { pokemon } = useOwnContext();

  const styles = useStyles();

  const {
    name,
    sprites,
    abilities,
    base_experience,
    height,
    weight,
    species,
    types,
  } = pokemon;

  return (
    <>
      {sprites === undefined ? null : (
        <Grid container justifyContent="center">
          <Card className="pokemon-container">
            <Typography variant="h3" className={styles.name} paragraph>
              {name}
            </Typography>
            <Grid
              item
              md={12}
              mx={3}
              borderRadius={1}
              className={`poke-${types[0].type.name}`}
            >
              <Stack direction="row" justifyContent="center" spacing={1}>
                <CardMedia
                  component="img"
                  sx={{ width: 250, height: 250 }}
                  image={sprites.front_default}
                  alt={name}
                />
                <CardMedia
                  component="img"
                  sx={{ width: 250, height: 250 }}
                  image={sprites.back_default}
                  alt={name}
                />
              </Stack>
            </Grid>
            <Box m={3} sx={{ display: "flex", width: 500 }}>
              <CardContent
                sx={{ width: 250, paddingTop: 5 }}
                className={styles.box}
              >
                <Typography variant="h6">
                  Experiencia: {base_experience}
                </Typography>
                <Typography variant="h6">Altura: {height}</Typography>
                <Typography variant="h6">Peso: {weight}</Typography>
                <Typography variant="h6">Especie: {species.name}</Typography>
              </CardContent>
              <Box ml={1} sx={{ width: 370 }} className="general-info">
                <CardContent className={styles.box}>
                  <Typography variant="h6">Habilidades:</Typography>
                  {abilities.map((abilityInfo) => {
                    const { ability } = abilityInfo;
                    return (
                      <Typography
                        variant="h6"
                        key={ability.name}
                        className="item"
                      >
                        {" "}
                        {`${ability.name}`}
                      </Typography>
                    );
                  })}
                </CardContent>
                <CardContent className={styles.box}>
                  <Typography variant="h6">Tipo:</Typography>
                  {types.map((typeInfo) => {
                    const { type } = typeInfo;
                    return (
                      <Typography variant="h6" key={type.name} className="item">
                        {" "}
                        {`${type.name}`}
                      </Typography>
                    );
                  })}
                </CardContent>
              </Box>
            </Box>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default PokemonDetail;
