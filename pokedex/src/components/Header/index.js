import React from "react";
import PropTypes from "prop-types";
import pokedexImage from "../../assets/pokedex.png";
import "./Header.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Header = (props) => {
  const { setIsInPokedex, isInPokedex } = props;

  const goAndRetunrn = () => {
    setIsInPokedex(!isInPokedex);
  };

  return (
    <div className="header">
      {isInPokedex ? (
        <Link to="/dashboard">
          <div style={{ alignItems: "flex-start", marginTop: 70 }}>
            <button
              style={{ background: "none", color: "inherit", border: "none" }}
              onClick={goAndRetunrn}
            >
              <ArrowBackIcon
                style={{ color: "#474B4E", fontWeight: "bolder" }}
              />
            </button>
          </div>
        </Link>
      ) : null}
      <div>
        <h1 className="title" >Pokedex</h1>
      </div>
      {!isInPokedex ? (
        <Link to="/pokedex">
          <div className="pokedex" style={{ marginTop: 50 }}>
            <button
              style={{ background: "none", color: "inherit", border: "none" }}
              onClick={goAndRetunrn}
            >
              <img src={pokedexImage} alt="pokedex" style={{ width: 70 }} />
            </button>
          </div>
        </Link>
      ) : null}
    </div>
  );
};
Header.propTypes = {
  setIsInPokedex: PropTypes.func,
  isInPokedex: PropTypes.bool,
};

export default Header;
