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
// import { pokedexInitialState, pokedexReducer } from "./reducers/pokedexReducer";
// import { TYPES } from "./actions/pokedexActions";

const SET_GET_POKEMONS = "SET_GET_POKEMONS";
const SUCCESS_GET_POKEMON = "SUCCESS_GET_POKEMON";
const ERROR_GET_POKEMONS = "ERROR_GET_POKEMONS";

const INITIAL_STATE = {
  loading: false,
  error: null,
  allPokemons: [],
  cartPokemon: [],
  pokedex: [],
  open: false,
  isInPokedex: false,
};

const reducer = (action, state) => {
  switch (action.type) {
    case SET_GET_POKEMONS:
      return {
        ...state,
        loading: true,
        error: null,
        open: false,
      };
    case SUCCESS_GET_POKEMON:
      console.log("---->", action.payload)
     const data = action.payload.map((element) => {
        const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
        console.log("elemento:", element)
         const id = element.url.replace(apiUrl, "").replace("/", "");
        
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`; 
        const capitalLetter = element.name.charAt(0).toUpperCase();
         const string = element.name.slice(1);
         //console.log(id)
        return {
          name: capitalLetter + string,
          image,
          id,
          url: element.url,
        };
        
      });
      console.log("data",data)
   
      return {
        ...state,
        loading: false,
        allPokemons: data,
      };
    case ERROR_GET_POKEMONS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

function App() {
  // const [allPokemons, setAllPokemons] = useState([]);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  console.log(state);
  // const {allPokemons, cartPokemon} = state;

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  //const [cartPokemon, setCartPokemon] = useState([]);
  // const [open, setOpen] = useState(false);
  // const [pokedex, setPokedex] = useState([]);
  // const [isInPokedex, setIsInPokedex] = useState(false);

  const getPokemon = async (path) => {
    dispatch({ type: SET_GET_POKEMONS });
    try {
      const response = await api.get(path);
      dispatch({ type: SUCCESS_GET_POKEMON, payload: response.data.results });
    } catch (error) {
      dispatch({ type: ERROR_GET_POKEMONS, payload: error });
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   setError(null);
  //   getPokemon()
  //     .then((data) => {
  //       const { results } = data;
  //       results.forEach((element) => {
  //         const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
  //         const id = element.url.replace(apiUrl, "").replace("/", "");
  //         element.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  //         element.id = id;
  //         const capitalLetter = element.name.charAt(0).toUpperCase();
  //         const string = element.name.slice(1);
  //         element.name = capitalLetter + string;
  //       });
  //       dispatch({type: TYPES.GET_POKEMONS, payload:results});
  //       //setAllPokemons(results);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []);

  // const addPokemon = (id, name, image) => {
  //   setCartPokemon((cartPokemon) => [...cartPokemon, { id, name, image }]);
  // };

  // const addPokemon = (id, name, image) => {
  //  dispatch({type:TYPES.ADD_POKEMON, payload: {id, name, image}})
  //     //  setCartPokemon(setCartPokemon((cartPokemon) => [...cartPokemon, { id, name, image }]));
  //    };

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
            {/*<PokedexIcon
              cartPokemon={state.cartPokemon}
              open={open}
              setOpen={setOpen}
            /> */}
            {/* {loading && <Loading />} */}
            {/* {allPokemons?.length === 0 && !error && !loading && <NotFound />} */}
            {/* {error && <Message />}
            {!error && ( */}
            <Board
              allPokemons={state.allPokemons}
              // addPokemon={addPokemon}
              // cartPokemon={state.cartPokemon}
              /* setCartPokemon={setCartPokemon}*/
              // removePokemon={removePokemon}
              // pokedex={pokedex}
            />
            {/* )} */}
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
