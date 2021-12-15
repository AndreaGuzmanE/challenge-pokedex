import React from "react";
import pokedexImage from "../../assets/pokedex.png";
import "./Header.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useOwnContext } from "../../store/dashboard/storeApi";

const Header = () => {
  const { isInPokedex, backDashboard } = useOwnContext();

  const handleClickReturn = () => backDashboard();

  return (
    <div className="header">
      {isInPokedex ? (
        <Link to="/dashboard">
          <div style={{ alignItems: "flex-start", marginTop: 70 }}>
            <button
              style={{ background: "none", color: "inherit", border: "none" }}
              onClick={handleClickReturn}
            >
              <ArrowBackIcon
                style={{ color: "#474B4E", fontWeight: "bolder" }}
              />
            </button>
          </div>
        </Link>
      ) : null}
      <div>
        <h1 className="title">Pokedex</h1>
      </div>
      {!isInPokedex ? (
        <Link to="/pokedex">
          <div className="pokedex" style={{ marginTop: 50 }}>
            <button
              style={{ background: "none", color: "inherit", border: "none" }}
              onClick={handleClickReturn}
            >
              <img src={pokedexImage} alt="pokedex" style={{ width: 70 }} />
            </button>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
