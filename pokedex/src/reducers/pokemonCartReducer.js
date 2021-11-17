import { TYPES_CART } from "../actions/pokemonCartActions";

export const cartPokemonInitialState = {
  cartPokemon: [],
};

export function pokemonCartReducer(stateCart, action) {
  switch (action.type) {
    case TYPES_CART.ADD_POKEMON: {
      console.log(action.payloadCart, "----")
        let addPokemon = [...cartPokemon, { action.payload.id, action.payload.name, action.payload.image }]
        return{
      }
    }
    case TYPES_CART.REMOVE_POKEMON: {
    }
    case TYPES_CART.CANCEL_POKEMONS: {
    }
    default:
      return stateCart;
  }
}