import React from "react";
import Pokeball from "../../assets/pokeball.png";
import "./SaveInPokedex.css";

const SaveInPokedex = () => {
  return (
    <div>
      <img className="pokeball" src={Pokeball} alt="not-found" />
      <h3 className="not-save">No has guardado ningún pokemon</h3>
    </div>
  );
};

export default SaveInPokedex;
