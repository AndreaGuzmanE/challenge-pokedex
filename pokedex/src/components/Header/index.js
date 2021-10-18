import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css";

const Header = (props) => {
  const {cartPokemon} = props;
  return (
    <div className="header">
      <h1>Pokedex</h1>
      <ShoppingCartIcon />
      <span>{cartPokemon.length}</span>

    </div>
  );
};

export default Header;
