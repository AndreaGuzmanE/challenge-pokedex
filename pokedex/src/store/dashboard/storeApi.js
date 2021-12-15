import { useStore } from "./reducer";
import {
  setGetPokemons,
  successGetPokemons,
  errorGetPokemons,
  addPokemon,
  backDashboard,
  setOpenModal,
  setCleanCart,
  setGetPokedex,
  setRemovePokemon,
  setPokemonDetail,
} from "./actions";

export const useOwnContext = () => {
  const { state, dispatch } = useStore();

  return {
    loading: state.loading,
    error: state.error,
    allPokemons: state.allPokemons,
    cartPokemon: state.cartPokemon,
    pokedex: state.pokedex,
    isOpen: state.isOpen,
    isInPokedex: state.isInPokedex,
    pokemon: state.pokemon,
    setGetPokemons: () => dispatch(setGetPokemons()),
    successGetPokemons: (payload) => dispatch(successGetPokemons(payload)),
    errorGetPokemons: (payload) => dispatch(errorGetPokemons(payload)),
    addPokemon: (payload) => dispatch(addPokemon(payload)),
    backDashboard: () => dispatch(backDashboard()),
    setOpenModal: () => dispatch(setOpenModal()),
    setCleanCart: () => dispatch(setCleanCart()),
    setGetPokedex: (payload) => dispatch(setGetPokedex(payload)),
    setRemovePokemon: (payload) => dispatch(setRemovePokemon(payload)),
    setPokemonDetail: (payload) => dispatch(setPokemonDetail(payload)),
  };
};