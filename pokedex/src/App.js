import React, { useEffect } from "react";
import api from "./api/apiPokemon";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Board from "./components/Board";
import Loading from "./components/Loading";
import Message from "./components/MessageError";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Detail from "./components/Detail";
import Counter from "./components/Counter";
import axios from "axios";
import { useOwnContext } from "./store/dashboard/storeApi";

function App() {
  const {
    loading,
    allPokemons,
    cartPokemon,
    error,
    setGetPokemons,
    successGetPokemons,
    errorGetPokemons,
    setGetPokedex,
    setCleanCart,
  } = useOwnContext();

  const getPokemon = async (path) => {
    setGetPokemons();
    try {
      const response = await api.get(path);
      successGetPokemons(response.data.results);
    } catch (error) {
      errorGetPokemons(error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const handleSavePokemon = async () => {
    try {
      for await (const response of cartPokemon.map((element) => element)) {
        await axios.post(
          "https://6164b44709a29d0017c88e55.mockapi.io/api/v1/pokemons/",
          response
        );
      }
      setCleanCart();
      getPokedex();
    } catch (error) {
      errorGetPokemons(error);
    }
  };

  const getPokedex = async () => {
    const mockApi =
      "https://6164b44709a29d0017c88e55.mockapi.io/api/v1/pokemons/";
    setGetPokemons();
    try {
      const data = await axios.get(mockApi).then((response) => response.data);
      setGetPokedex(data);
    } catch (error) {
      errorGetPokemons(error);
    }
  };

  useEffect(() => {
    getPokedex();
  }, []);

  const deletePokemon = async (objectId) => {
    setGetPokemons();
    try {
      await axios
        .delete(
          `https://6164b44709a29d0017c88e55.mockapi.io/api/v1/pokemons/${objectId}`
        )
        .then((response) => {
          return response;
        });
      getPokedex();
    } catch (error) {
      errorGetPokemons(error);
    }
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route exact path="/dashboard">
            <Counter handleSavePokemon={handleSavePokemon} />
            {loading && <Loading />}
            {allPokemons?.length === 0 && !error && !loading && <NotFound />}
            {error && <Message />}
            {!error && <Board />}
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/pokedex/">
            <Board
              handleSavePokemon={handleSavePokemon}
              deletePokemon={deletePokemon}
              modeMockApi
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
