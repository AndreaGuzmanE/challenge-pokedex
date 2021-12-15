import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Typography, Box } from "@mui/material";
import { useOwnContext } from "../../store/dashboard/storeApi";

const BagIcon = () => {
  const { cartPokemon, setOpenModal } = useOwnContext();

  const handleOpenModal = () => {
    setOpenModal();
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

export default BagIcon;
