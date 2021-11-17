import React, { useState, useEffect, useReducer } from "react";
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

import reducer, { INITIAL_STATE } from "./store/dashboard/reducer";
import {
  setGetPokemons,
  successGetPokemons,
  errorGetPokemons,
  setOpenModal,
  addPokemon,
} from "./store/dashboard/actions";

function App() {
  // const [allPokemons, setAllPokemons] = useState([]);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  console.log("STATE ==>", state);
  const { loading, allPokemons, error, isInPokedex, cartPokemon, open } = state;
  // const {allPokemons, cartPokemon} = state;

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  //const [cartPokemon, setCartPokemon] = useState([]);
  // const [open, setOpen] = useState(false);
  // const [pokedex, setPokedex] = useState([]);
  // const [isInPokedex, setIsInPokedex] = useState(false);

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
    console.log(id, name, image);

    dispatch(addPokemon({ id, name, image }));
  };

  // const removePokemon = (id) => {
  // //  setCartPokemon(cartPokemon.filter((element) => element.id !== id));
  // };

  // const cancelPokemons = () => {
  //  // setCartPokemon([]);
  // };

  return (
    <div className="App">
      <Router>
        {/* <Header
          isInPokedex={isInPokedex}
          setIsInPokedex={setIsInPokedex}
        /> */}
        {/* <Counter
          open={open}
          setOpen={setOpen}
          cartPokemon={state.cartPokemon}
          cancelPokemons={cancelPokemons}
          pokedex={pokedex}
          setPokedex={setPokedex}
          error={error}
          setError={setError}
          loading={loading}
          setLoading={setLoading}
       /> */}
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/dashboard">
            <PokedexIcon
              cartPokemon={cartPokemon}
              open={open}
              setOpen={openModal}
            />
            {loading && <Loading />}
            {allPokemons?.length === 0 && !error && !loading && <NotFound />}
            {error && <Message />}
            {!error && (
              <Board
                allPokemons={allPokemons}
                addPokemon={addPokemonHandler}
                // cartPokemon={state.cartPokemon}
                /* setCartPokemon={setCartPokemon}*/
                // removePokemon={removePokemon}
                // pokedex={pokedex}
              />
            )}
          </Route>
          {/* <Route path="/detail/:id">
            <Detail
              error={error}
              setError={setError}
              loading={loading}
              setLoading={setLoading}
            />
          </Route> */}
          {/* <Route path="/pokedex/">
            <Board
              pokedex={pokedex}
              setPokedex={setPokedex}
              setError={setError}
              setLoading={setLoading}
              modeMockApi
            />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
