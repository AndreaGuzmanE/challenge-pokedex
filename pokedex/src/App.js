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
import Counter from "./components/Counter";
import PokedexIcon from "./components/Pokedex/PokedexIcon";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cartPokemon, setCartPokemon] = useState([]);
  const [open, setOpen] = useState(false);
  const [pokedex, setPokedex] = useState([]);
  const [isInPokedex, setIsInPokedex] = useState(false);
  

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
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const addPokemon = (id, name, image) => {
    setCartPokemon((cartPokemon) => [...cartPokemon, { id, name, image }]);
  };

  const removePokemon = (id) => {
    setCartPokemon(cartPokemon.filter((element) => element.id !== id));
  };

  const cancelPokemons = () => {
    setCartPokemon([]);
  };

  return (
    <div className="App">
      <Router>
        <Header
          isInPokedex={isInPokedex}
          setIsInPokedex={setIsInPokedex}
        />
        <Counter
          open={open}
          setOpen={setOpen}
          cartPokemon={cartPokemon}
          cancelPokemons={cancelPokemons}
          pokedex={pokedex}
          setPokedex={setPokedex}
          error={error}
          setError={setError}
          loading={loading}
          setLoading={setLoading}
        />
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/dashboard">
            <PokedexIcon
              cartPokemon={cartPokemon}
              open={open}
              setOpen={setOpen}
            />
            {loading && <Loading />}
            {allPokemons.length === 0 && !error && !loading && <NotFound />}
            {error && <Message />}
            {!error && (
              <Board
                allPokemons={allPokemons}
                addPokemon={addPokemon}
                cartPokemon={cartPokemon}
                setCartPokemon={setCartPokemon}
                removePokemon={removePokemon}
                pokedex={pokedex}
              />
            )}
          </Route>
          <Route path="/detail/:id">
            <Detail
              error={error}
              setError={setError}
              loading={loading}
              setLoading={setLoading}
            />
          </Route>
          <Route path="/pokedex/">
            <Board
              pokedex={pokedex}
              setPokedex={setPokedex}
              setError={setError}
              setLoading={setLoading}
              modeMockApi
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
