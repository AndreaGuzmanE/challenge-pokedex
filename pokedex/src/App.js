import React, { useEffect, useReducer } from "react";
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

import reducer, { INITIAL_STATE } from "./store/dashboard/reducer";
import {
  setGetPokemons,
  successGetPokemons,
  errorGetPokemons,
  setOpenModal,
  addPokemon,
  setCleanCart,
  setRemovePokemon,
} from "./store/dashboard/actions";

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const {
    loading,
    allPokemons,
    error,
    isInPokedex,
    cartPokemon,
    isOpen,
    pokedex,
    pokemon,
  } = state;

  const getPokemon = async (path) => {
    dispatch(setGetPokemons());
    try {
      const response = await api.get(path);
      dispatch(successGetPokemons(response.data.results));
    } catch (error) {
      dispatch(errorGetPokemons(error));
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const openModal = () => dispatch(setOpenModal());

  const addPokemonHandler = (id, name, image) => {
    dispatch(addPokemon({ id, name, image }));
  };

  const removePokemon = (id) => dispatch(setRemovePokemon(id));

  const cancelPokemons = () => dispatch(setCleanCart());


  return (
    <div className="App">
      <Router>
        <Header isInPokedex={isInPokedex} dispatch={dispatch} />
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/dashboard">
            <Counter
              isOpen={isOpen}
              openModal={openModal}
              cartPokemon={cartPokemon}
              cancelPokemons={cancelPokemons}
              pokedex={pokedex}
              dispatch={dispatch}
            />
            {loading && <Loading />}
            {allPokemons?.length === 0 && !error && !loading && <NotFound />}
            {error && <Message />}
            {!error && (
              <Board
                allPokemons={allPokemons}
                addPokemon={addPokemonHandler}
                cartPokemon={cartPokemon}
                removePokemon={removePokemon}
                pokedex={pokedex}
                dispatch={dispatch}
              />
            )}
          </Route>
          <Route path="/detail/:id">
            <Detail
              dispatch={dispatch}
              error={error}
              pokemon={pokemon}
              loading={loading}
            />
          </Route>
          <Route path="/pokedex/">
            <Board pokedex={pokedex} dispatch={dispatch} modeMockApi />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
