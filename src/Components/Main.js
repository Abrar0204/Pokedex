import React, { useEffect } from 'react';
import PokemonContainer from './PokemonContainer';
import Header from './Header';
import Loader from './Loader';
import PokemonCard from './PokemonCard';
import PokemonEmptyCard from './PokemonEmptyCard';
import store from '../store';
import { getPokemons, getSelectedPokemon } from '../actions/pokemonActions';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
	const dispatch = useDispatch();

	const pokemonsDetails = useSelector((state) => state.pokemonList);

	const { pokemons, error, loading } = pokemonsDetails;

	useEffect(
		() => {
			const fetchData = async () => {
				dispatch(getPokemons()).then(() => {
					const { pokemonList } = store.getState();
					dispatch(getSelectedPokemon(pokemonList.pokemons[0]));
				});
			};
			fetchData();
		},
		[ dispatch ]
	);

	return (
		<div className="main" id="main">
			<Header error={error} />
			{loading ? <Loader /> : <PokemonContainer pokemons={pokemons} />}
			<div className="pokeball-svg">
				<svg viewBox="0 0 732 734" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M732 391.256H461.315C450.184 433.043 412.082 463.827 366.789 463.827C321.496 463.827 283.393 433.043 272.263 391.256H7.43559e-05C12.5835 582.434 171.638 733.604 366 733.604C560.362 733.604 719.417 582.434 732 391.256ZM731.893 340.771C718.541 150.34 559.827 0 366 0C172.173 0 13.4593 150.34 0.107303 340.771H272.263C283.393 298.984 321.496 268.199 366.789 268.199C412.082 268.199 450.184 298.984 461.315 340.771H731.893Z"
						fill="black"
						fillOpacity="0.12"
					/>
				</svg>
			</div>
			{loading ? <PokemonEmptyCard /> : <PokemonCard />}
		</div>
	);
};

export default Main;
