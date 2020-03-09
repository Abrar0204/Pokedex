import React, { useState, createContext } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
	const [ pokemons, setPokemons ] = useState([]);
	const [ pokemon, setPokemon ] = useState([ { sprites: {}, types: [ { type: {} } ] } ]);
	const [ loading, setLoading ] = useState(true);
	const [ fetchurl, setFetchurl ] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100');

	return (
		<PokemonContext.Provider
			value={{
				pokemonsCont: [ pokemons, setPokemons ],
				pokemonCont: [ pokemon, setPokemon ],
				loadingCont: [ loading, setLoading ],
				fetchCont: [ fetchurl, setFetchurl ]
			}}
		>
			{props.children}
		</PokemonContext.Provider>
	);
};
