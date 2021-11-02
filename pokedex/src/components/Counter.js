import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import savePokemon, { getPokedex } from "../helpers/savePokemon";

const Counter = (props) => {
  const {
    open,
    setOpen,
    cartPokemon,
    cancelPokemons,
    pokedex,
    setPokedex,
    setError,
    setLoading,
  } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const handleSavePokemon = () => {
    savePokemon(cartPokemon, setPokedex, setLoading, setError);
    cancelPokemons();
    handleClose();
  };

  const handleCancelPokemons = () => {
    cancelPokemons();
    handleClose();
  };

  useEffect(() => {
    getPokedex(setPokedex, setLoading, setError);
  }, [setPokedex, setLoading, setError]);

  return (
    <Modal
      hideBackdrop
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box
        sx={{
          width: 300,
          height: 150,
          padding: 1,
          marginTop: 1,
          marginLeft: 178,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          textAlign: "center",
          borderRadius: 3,
          justifyContent: "end",
          backgroundColor: "white",
        }}
      >
        <div>
          <h2 id="child-modal-title">{cartPokemon.length}</h2>
          <p id="child-modal-description">Seleccionados</p>
          <Button onClick={handleCancelPokemons}>Cancelar</Button>
        </div>
        <div>
          <h2 id="child-modal-title">{pokedex.length}</h2>
          <p id="child-modal-description">Guardados</p>
          <Button onClick={handleSavePokemon}>Guardar</Button>
        </div>
      </Box>
    </Modal>
  );
};

Counter.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  cartPokemon: PropTypes.array,
  cancelPokemons: PropTypes.func,
  pokedex: PropTypes.array,
  setPokedex: PropTypes.func,
  setError: PropTypes.func,
  setLoading: PropTypes.func,
};

export default Counter;
