import {
	GET_POKEMONS,
	GET_POKEMONS_ERROR,
	GET_POKEMON_LOADING,
	SET_SELECTED_POKEMON
} from '../constants/pokemonConstants';
import axios from 'axios';
import Pokemon from '../Data/Pokemon';
import pokeApi from '../apis/pokeApi';
const capitalize = (string = '') => {
	return `${string[0].toUpperCase()}${string.slice(1)}`;
};

export const getPokemons = () => async (dispatch) => {
	try {
		dispatch({
			type: GET_POKEMON_LOADING,
			payload: []
		});
		const { data } = await pokeApi.get('/pokemon?&limit=100');
		const pokemonsDataUrl = data.results;
		const tempPokemons = await Promise.all(
			pokemonsDataUrl.map(async (pokemonUrl) => {
				const { data } = await axios.get(pokemonUrl.url);
				const pokemonTypes = [];
				data.types.forEach((type) => {
					pokemonTypes.push(capitalize(type.type.name));
				});
				const pokemonData = new Pokemon(
					data.id,
					capitalize(data.name),
					data.height / 10,
					data.weight / 10,
					data.sprites['front_default'] || data.sprites['other']['official-artwork']['front_default'] || '',
					pokemonTypes,
					data.stats,
					data.abilities
				);
				return pokemonData;
			})
		);

		dispatch({
			type: GET_POKEMONS,
			payload: tempPokemons
		});

		return Promise.resolve();
	} catch (e) {
		dispatch({ type: GET_POKEMONS_ERROR, payload: 'Error' });
	}
};

export const getSelectedPokemon = (pokemon) => {
	return {
		type: SET_SELECTED_POKEMON,
		payload: pokemon
	};
};

export const hideCard = (hiddenState) => {
	return {
		type: 'TOGGLE_CARD',
		payload: hiddenState
	};
};
