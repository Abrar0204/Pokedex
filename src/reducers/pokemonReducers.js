import {
	GET_POKEMONS,
	GET_POKEMONS_ERROR,
	GET_POKEMON_LOADING,
	SET_SELECTED_POKEMON
} from '../constants/pokemonConstants';

const getPokemonsReducer = (state = { pokemons: [] }, { type, payload }) => {
	switch (type) {
		case GET_POKEMON_LOADING:
			return { pokemon: [], loading: true };
		case GET_POKEMONS:
			return { pokemons: payload, loading: false };
		case GET_POKEMONS_ERROR:
			return { pokemons: [], error: 'Error' };
		default:
			return state;
	}
};

const setSelectedPokemonReducer = (state = { selectedPokemon: {} }, { type, payload }) => {
	switch (type) {
		case SET_SELECTED_POKEMON:
			return { selectedPokemon: payload };
		default:
			return state;
	}
};

const toggleHiddenCardReducer = (state = { hidden: true }, { type, payload }) => {
	switch (type) {
		case 'TOGGLE_CARD':
			return { hidden: payload };
		default:
			return state;
	}
};

export { getPokemonsReducer, setSelectedPokemonReducer, toggleHiddenCardReducer };
