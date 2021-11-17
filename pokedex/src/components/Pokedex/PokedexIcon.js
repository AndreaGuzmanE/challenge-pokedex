import React from "react";
import PropTypes from "prop-types";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {Typography, Box } from "@mui/material";

const PokedexIcon = (props) => {
  const { cartPokemon, open, setOpen } = props;

  const openModal = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{display: "flex", justifyContent:"flex-end" }}>
      <ShoppingBagIcon
        onClick={openModal}
        sx={{ fontSize: 30, color: "blue", position:"relative", marginRight:3}}
      />
      <Typography
        variant="body1"
        gutterBottom
        component="span"
        sx={{
          fontSize: 14,
          paddingX: 1,
          position:"absolute",
          right: 15,
          backgroundColor: "#fad61d",
          color: "blue",
          borderRadius: 50,
          fontWeight: 700,
          verticalAlign: "top",
        }}
      >
        {cartPokemon?.length === 0 ? null : cartPokemon?.length}
      </Typography>
    </Box>
  );
};

PokedexIcon.propTypes = {
  cartPokemon: PropTypes.array,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default PokedexIcon;
