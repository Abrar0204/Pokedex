import React, { useEffect, useContext } from 'react';
import { PokemonContext } from '../Data/PokemonContext';
import PokemonCard from './PokemonCard';
import pokeball from '../res/pokeball.svg';

const Screen = () => {
	const { pokemonCont, loadingCont, fetchCont } = useContext(PokemonContext);

	// const [ pokemons, setPokemons ] = pokemonsCont;
	const [ pokemon, setPokemon ] = pokemonCont;
	const [ loading, setLoading ] = loadingCont;
	const [ fetchurl ] = fetchCont;

	useEffect(() => {
		setLoading(true);
		fetchPokemons();
		extraData();
		// console.log(pokemon);
	}, []);

	const fetchPokemons = async () => {
		const data = await fetch(fetchurl);
		const parsedData = await data.json();
		let pokeData;
		let parsedPokeData;
		let pokeDataArray = [];
		for (let i = 0; i < parsedData.results.length; i++) {
			pokeData = await fetch(parsedData.results[i].url);
			parsedPokeData = await pokeData.json();
			pokeDataArray[i] = parsedPokeData;
		}
		//
		setPokemon(pokeDataArray);
		setLoading(false);
		setTypeColor();
	};

	const extraData = async () => {
		const extrData = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=964`);
		const parsedExtraData = await extrData.json();
		let extrapokeData;
		let extraparsedPokeData;
		let extrapokeDataArray = [];
		for (let i = 0; i < parsedExtraData.results.length; i++) {
			extrapokeData = await fetch(parsedExtraData.results[i].url);
			extraparsedPokeData = await extrapokeData.json();
			extrapokeDataArray[i] = extraparsedPokeData;
		}
		setPokemon(extrapokeDataArray);
	};

	const setTypeColor = () => {
		const type = document.querySelectorAll('.pokemons-screen-list-types-type');
		// console.log(type);
		for (let i = 0; i < type.length; i++) {
			// console.log(type[i].textContent);
			if (type[i].textContent === 'fire') {
				type[i].style.backgroundColor = '#9C531F';
			} else if (type[i].textContent === 'normal') {
				type[i].style.backgroundColor = '#9C531F';
			} else if (type[i].textContent === 'fighting') {
				type[i].style.backgroundColor = '#7D1F1A';
			} else if (type[i].textContent === 'flying') {
				type[i].style.backgroundColor = '#6D5E9C';
			} else if (type[i].textContent === 'poison') {
				type[i].style.backgroundColor = '#682A68';
			} else if (type[i].textContent === 'ground') {
				type[i].style.backgroundColor = '#927D44';
			} else if (type[i].textContent === 'rock') {
				type[i].style.backgroundColor = '#786824';
			} else if (type[i].textContent === 'bug') {
				type[i].style.backgroundColor = '#6D7815';
			} else if (type[i].textContent === 'ghost') {
				type[i].style.backgroundColor = '#493963';
			} else if (type[i].textContent === 'steel') {
				type[i].style.backgroundColor = '#787887';
			} else if (type[i].textContent === 'water') {
				type[i].style.backgroundColor = '#445E9C';
			} else if (type[i].textContent === 'grass') {
				type[i].style.backgroundColor = '#4E8234';
			} else if (type[i].textContent === 'electric') {
				type[i].style.backgroundColor = '#A1871F';
			} else if (type[i].textContent === 'psychic') {
				type[i].style.backgroundColor = '#A13959';
			} else if (type[i].textContent === 'ice') {
				type[i].style.backgroundColor = '#638D8D';
			} else if (type[i].textContent === 'dragon') {
				type[i].style.backgroundColor = '#4924A1';
			} else if (type[i].textContent === 'dark') {
				type[i].style.backgroundColor = '#49392F';
			} else if (type[i].textContent === 'fairy') {
				type[i].style.backgroundColor = '#9B6470';
			}
		}
	};

	if (loading) {
		return (
			<div className="mainScreen">
				<div className="displayScreen">
					<div className="loading-screen">
						<img src={pokeball} alt="Pokeball" className="loading-screen-ball" />
						<h1 className="loading-screen-title">loading.....</h1>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="mainScreen">
			<div className="displayScreen" id="displayScreen">
				{pokemon.map((pok) => <PokemonCard pok={pok} key={pok.name} />)}
				<button className="more-button">More...</button>
			</div>
		</div>
	);
};

export default Screen;
