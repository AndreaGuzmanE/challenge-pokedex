import React, { useState, useEffect } from "react";
import api from "./api/apiPokemon";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Board from "./components/Board";
import Loading from "./components/Loading";
import Message from "./components/MessageError";
import Header from "./components/Header";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPokemon = async (path) => {
    const response = await api.get(path);
    return response.data;
  };
  
  useEffect(() => {
    setLoading(true);
    setTimeout(()=> {
      getPokemon()
      .then((data) => {
        const { results } = data;
        setAllPokemons(results);
      })
      .catch((error) => {
        setError(error);
      });
      setLoading(false)
    }, 2000)
    
      
  }, []);


  const getURLs = allPokemons.map((element) => element.url);
  const getID = getURLs.map((urlPokemon) => {
    const url = `${urlPokemon}`;
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
    const id = url.replace(apiUrl, "").replace("/", "");
    return id;
  });

  const getPokemonImages = getID.map((id) => {
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return image;
  });
  

  return (
    <div className="App">
      <Router basename="dashboard">
        <Switch>
          <Route path="/">
            < Header />
            {loading && <Loading />}
            {error && <Message />}
            {allPokemons &&  (
              <Board
                allPokemons={allPokemons}
                getPokemonImages={getPokemonImages}
              />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
