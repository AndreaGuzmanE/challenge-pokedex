import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import savePokemon, { getPokedex } from "../helpers/savePokemon";
import { makeStyles } from "@mui/styles";

import BagIcon from "../components/Pokedex";

const useStyles = makeStyles(() => ({
  modal: {
    width: 300,
    height: 150,
    padding: 1,
    margin: 20,
    float: "right",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    textAlign: "center",
    borderRadius: 3,
    justifyContent: "end",
    backgroundColor: "white",
  },
}));

const Counter = (props) => {
  const styles = useStyles();
  const { isOpen, openModal, cartPokemon, cancelPokemons, pokedex, dispatch } =
    props;

  const handleCancelPokemons = () => cancelPokemons();

  const handleSavePokemon = () => {
    savePokemon(cartPokemon, dispatch);
    cancelPokemons();
  };

  useEffect(() => {
    getPokedex(dispatch);
  }, [dispatch]);

  const body = (
    <div className={styles.modal}>
      <div>
        <h2 id="child-modal-title">{cartPokemon?.length}</h2>
        <p id="child-modal-description">Seleccionados</p>
        <Button onClick={handleCancelPokemons}>Cancelar</Button>
      </div>
      <div>
        <h2 id="child-modal-title">{pokedex?.length}</h2>
        <p id="child-modal-description">Guardados</p>
        <Button onClick={handleSavePokemon}>Guardar</Button>
      </div>
    </div>
  );
  return (
    <>
      <BagIcon cartPokemon={cartPokemon} openModal={openModal} />
      <Modal open={isOpen} onClose={handleCancelPokemons}>
        {body}
      </Modal>
    </>
  );
};

Counter.propTypes = {
  isOpen: PropTypes.bool,
  openModal: PropTypes.func,
  cartPokemon: PropTypes.array,
  cancelPokemons: PropTypes.func,
  pokedex: PropTypes.array,
  dispatch: PropTypes.func,
};

export default Counter;
