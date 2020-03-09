import React from 'react';

const PokemonCard = ({ pok }) => {
	let pic;
	if (pok.sprites.front_default === null) {
		pic = 'https://i.ya-webdesign.com/images/8-bit-pc-png-2.png';
	} else {
		pic = pok.sprites.front_default;
	}

	return (
		<div className="pokemons-screen-list">
			<div className="pokemons-screen-list-image">
				<img src={pic} alt={pok.name} />
			</div>
			<h1 className="pokemons-screen-list-title">{pok.name}</h1>
			<div className="pokemons-screen-list-types">
				{pok.types.map((typ) => (
					<h2 className="pokemons-screen-list-types-type" key={typ.type.name}>
						{typ.type.name}
					</h2>
				))}
			</div>
		</div>
	);
};

export default PokemonCard;
