import React from "react";
import PropTypes from "prop-types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";

const Header = (props) => {
  const { cartPokemon, open, setOpen } = props;

  const openModal = () => {
    setOpen(!open);
  };
  return (
    <div className="header">
      <h1>Pokedex</h1>
      <ShoppingCartIcon onClick={openModal} />
      <span>{cartPokemon.length}</span>
    </div>
  );
};
Header.propTypes = {
  cartPokemon: PropTypes.array,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default Header;
