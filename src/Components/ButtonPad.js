import React from 'react';
import Button from './Button';
const ButtonPad = () => {
	const pokemonTypes = [
		'Normal',
		'Fighting',
		'Flying',
		'Poison',
		'Ground',
		'Rock',
		'Bug',
		'Ghost',
		'Steel',
		'Fire',
		'Water',
		'Grass',
		'Electric',
		'Psychic',
		'Dragon',
		'Ice',
		'Dark',
		'Fairy'
	];
	return <div className="type">{pokemonTypes.map((type) => <Button name={type} key={type} />)}</div>;
};

export default ButtonPad;
