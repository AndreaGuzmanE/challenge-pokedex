import React, { useState, useEffect } from "react";
import api from "./api/apiPokemon";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Board from "./components/Board";
import Loading from "./components/Loading";
import Message from "./components/MessageError";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Detail from "./components/Detail";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cartPokemon, setCartPokemon] = useState([]);
  

  const getPokemon = async (path) => {
    const response = await api.get(path);
    return response.data;
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    getPokemon()
      .then((data) => {
        const { results } = data;
        results.forEach((element) => {
          const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
          const id = element.url.replace(apiUrl, "").replace("/", "");
          element.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          element.id = id;
          const capitalLetter = element.name.charAt(0).toUpperCase();
          const string = element.name.slice(1);
          element.name = capitalLetter + string;
        });
        setAllPokemons(results);
        //setAllPokemons([]);
        
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  console.log("---->", allPokemons)
  return (
    <div className="App">
      <Router>
        <Header cartPokemon={cartPokemon}/>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/dashboard">
            {loading && <Loading />}
            {allPokemons.length === 0 && !error && !loading && <NotFound />}
            {error && <Message />}
            {!error && <Board allPokemons={allPokemons} cartPokemon={cartPokemon} setCartPokemon={setCartPokemon} />}
          </Route>
          <Route path="/detail/:idPokemon">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
