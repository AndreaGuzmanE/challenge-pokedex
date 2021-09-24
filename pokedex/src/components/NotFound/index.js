import React from "react";
import Pokeball from "./pokeball.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <img className="pokeball" src={Pokeball} alt="not-found" />
      <h3 className="not-found">No se encontraron resultados</h3>
    </div>
  );
};

export default NotFound;
