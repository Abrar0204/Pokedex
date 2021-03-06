import React from 'react';
import Pokemon from './Pokemon';

const PokemonContainer = ({ pokemons }) => {
	return (
		<div className="pokemon-container">
			{pokemons.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
		</div>
	);
};

export default PokemonContainer;
