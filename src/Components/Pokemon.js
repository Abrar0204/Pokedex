import React, { useContext } from 'react';
import { PokemonContext } from '../Data/PokemonContext';

const Pokemon = ({ pokemon }) => {
	const { selectedPokemonData, pokemonCardHidden } = useContext(PokemonContext);
	const [ selectedPokemon, setSelectedPokemon ] = selectedPokemonData;
	const [ cardHidden, setCardHidden ] = pokemonCardHidden;

	const setPokemonData = () => {
		setSelectedPokemon(pokemon);
		setCardHidden(false);
	};

	return (
		<div className={`pokemon ${pokemon.types[0]} gradient`} key={pokemon.id} onClick={setPokemonData}>
			<p className="pokemon-name">{pokemon.name}</p>

			<div className="pokemon-types">
				{pokemon.types.map(
					(type) =>
						pokemon.types.length === 2 && pokemon.types[1] === type ? (
							<div className={`type ${type}-outline`} key={type}>
								<p className="type-name">{type}</p>
							</div>
						) : (
							<div className="type white-outline" key={type}>
								<p className="type-name">{type}</p>
							</div>
						)
				)}
			</div>
			<div className="pokemon-image-container">
				{pokemon.sprite !== '' ? (
					<img className="pokemon-image" src={pokemon.sprite} alt={pokemon.name} />
				) : (
					<svg viewBox="0 0 732 734" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M732 391.256H461.315C450.184 433.043 412.082 463.827 366.789 463.827C321.496 463.827 283.393 433.043 272.263 391.256H7.43559e-05C12.5835 582.434 171.638 733.604 366 733.604C560.362 733.604 719.417 582.434 732 391.256ZM731.893 340.771C718.541 150.34 559.827 0 366 0C172.173 0 13.4593 150.34 0.107303 340.771H272.263C283.393 298.984 321.496 268.199 366.789 268.199C412.082 268.199 450.184 298.984 461.315 340.771H731.893Z"
							fill="black"
							fill-opacity="0.12"
						/>
					</svg>
				)}
			</div>
		</div>
	);
};

export default Pokemon;
