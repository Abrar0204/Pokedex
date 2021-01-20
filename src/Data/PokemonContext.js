import React, { useState, createContext } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
	const [ pokemons, setPokemons ] = useState([]);
	const [ selectedPokemon, setSelectedPokemon ] = useState({});
	const [ cardHidden, setCardHidden ] = useState(true);

	return (
		<PokemonContext.Provider
			value={{
				pokemonsData: [ pokemons, setPokemons ],
				selectedPokemonData: [ selectedPokemon, setSelectedPokemon ],
				pokemonCardHidden: [ cardHidden, setCardHidden ]
			}}
		>
			{props.children}
		</PokemonContext.Provider>
	);
};
