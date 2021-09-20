import React, {useState, useEffect} from "react"
import api from "./api/apiPokemon";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Board from "./components/Board"

function App() {

  const [allPokemons, setAllPokemons] = useState([]);

  const getPokemon = async(path) => {
    const response = await api.get(path);
    return(response.data); 
  };

  useEffect(() => {
    getPokemon()
    .then(data => {
      const {results} = data;
      setAllPokemons(results)
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <h1>Pokedex</h1>
            <Board allPokemons={allPokemons}/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
