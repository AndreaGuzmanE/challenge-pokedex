import React from "react";
import PropTypes from "prop-types";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Typography, Box } from "@mui/material";

const BagIcon = (props) => {
  const { cartPokemon, openModal } = props;

  const handleOpenModal = () => {
    openModal();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <ShoppingBagIcon
        onClick={handleOpenModal}
        sx={{
          fontSize: 30,
          color: "blue",
          position: "relative",
          marginRight: 3,
        }}
      />
      <Typography
        variant="body1"
        gutterBottom
        component="span"
        sx={{
          fontSize: 14,
          paddingX: 1,
          position: "absolute",
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

BagIcon.propTypes = {
  cartPokemon: PropTypes.array,
  openModal: PropTypes.func,
};

export default BagIcon;
