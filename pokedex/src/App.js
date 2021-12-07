import React, { useEffect, useReducer } from "react";
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

import { useOwnContext } from "./store/dashboard/storeApi";

function App() {
  const {
    loading,
    allPokemons,
    error,
    setGetPokemons,
    successGetPokemons,
    errorGetPokemons,
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

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route exact path="/" />
          <Route exact path="/dashboard">
            <h1>Dashboard!</h1>
            <Counter />
            {loading && <Loading />}
            {allPokemons?.length === 0 && !error && !loading && <NotFound />}
            {error && <Message />}
            {!error && <Board />}
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/pokedex/">
            <Board modeMockApi />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
