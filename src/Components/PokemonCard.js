import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { hideCard } from '../actions/pokemonActions';

const PokemonCard = () => {
	const dispatch = useDispatch();

	const selectedPokemonDetails = useSelector((state) => state.selectedPokemonDetails);
	const cardHidden = useSelector((state) => state.cardHidden);

	const { selectedPokemon } = selectedPokemonDetails;
	const { hidden } = cardHidden;

	const pokemon = selectedPokemon || {};

	const capitalize = (string = '') => {
		return `${string[0].toUpperCase()}${string.slice(1)}`;
	};

	const convertToFeet = (height) => {
		return (height * 3.281).toFixed(2);
	};
	const convertToPounds = (weight) => {
		return (weight * 2.2).toFixed(2);
	};

	return (
		Object.keys(pokemon).length !== 0 && (
			<div className={`pokemon-card ${pokemon.types[0]} gradient ${hidden ? 'hidden' : 'open'}`}>
				<div
					className="exit-button"
					onClick={() => {
						dispatch(hideCard(!hidden));
					}}
				>
					<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="window-close">
							<path
								id="Vector"
								d="M13.5894 12.0747L19.1294 17.6147V19.0747H17.6694L12.1294 13.5347L6.58939 19.0747H5.12939V17.6147L10.6694 12.0747L5.12939 6.53471V5.07471H6.58939L12.1294 10.6147L17.6694 5.07471H19.1294V6.53471L13.5894 12.0747Z"
								fill="white"
							/>
						</g>
					</svg>
				</div>
				<div className="card-header">
					<img className="image" src={pokemon.sprite} alt={pokemon.name} />
					<p className="name">{pokemon.name}</p>
					<div className="types">
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
				</div>
				<div className="stats">
					<p className="stats-header">Base Stats</p>
					<div className="stats-container">
						{pokemon.stats.map((stat) => (
							<div className="stat" key={stat.stat.name}>
								<p className="stat-name">{capitalize(stat.stat.name)}</p>
								<div className="stat-bar-holder">
									<motion.div
										className="stat-bar"
										initial={{ width: 0 }}
										animate={{ width: `${stat.base_stat > 100 ? 100 : stat.base_stat}%` }}
									/>
								</div>

								<p className="stat-value">{stat.base_stat}</p>
							</div>
						))}
					</div>
				</div>
				<div className="height_weight">
					<div className="height">
						<p className="height-name">Height</p>
						<p className="height-value">{`${pokemon.height}m | ${convertToFeet(pokemon.height)}ft`}</p>
					</div>
					<div className="weight">
						<p className="weight-name">Weight</p>
						<p className="weight-value">{`${pokemon.weight}kgs | ${convertToPounds(pokemon.weight)}lbs`}</p>
					</div>
				</div>
				<div className="abilities">
					<p className="abilities-header">Abilities</p>
					<div className="abilities-container">
						{pokemon.abilities.map((ability) => (
							<div className="ability" key={ability.ability.name}>
								<p className="ability-name">{capitalize(ability.ability.name)}</p>
								<p className="ability-type">{ability.is_hidden ? 'Hidden' : 'Not Hidden'}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	);
};

export default PokemonCard;
