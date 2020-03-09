import React, { useContext } from 'react';
import { PokemonContext } from '../Data/PokemonContext';
const Button = ({ name }) => {
	const { pokemonCont, loadingCont } = useContext(PokemonContext);
	const [ pokemon, setPokemon ] = pokemonCont;
	const [ loading, setLoading ] = loadingCont;

	const filterType = async (e) => {
		setLoading(true);
		const type = e.target.textContent.toLowerCase();
		const data = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
		const parsedData = await data.json();
		let dat;
		let parDat;
		let pokeDataArray = [];
		// console.log(parsedData);
		for (let i = 0; i < parsedData.pokemon.length; i++) {
			dat = await fetch(parsedData.pokemon[i].pokemon.url);
			parDat = await dat.json();
			pokeDataArray[i] = parDat;
		}
		console.log(pokeDataArray);
		setPokemon(pokeDataArray);
		setLoading(false);
	};

	return (
		<button onClick={filterType} className="typeButtons">
			{name}
		</button>
	);
};

export default Button;
