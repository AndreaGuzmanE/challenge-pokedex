import { TYPES } from "../actions/pokedexActions";

export const pokedexInitialState = {
  allPokemons: [],
  cartPokemon:[],
  
};

export function pokedexReducer(state, action) {
  switch (action.type) {
    case TYPES.GET_POKEMONS: {
      //console.log(action.payload)
      return {
        allPokemons: action.payload,
      }
    }
      case TYPES.ADD_POKEMON: {
        //let pokemonAddCart = state.allPokemons.find(pokemon => pokemon.id === action.payload)
        // console.log(pokemonAddCart)
         
        //console.log(action.payload)
        
    }
    default:
      return state;
  }
}
