import React from 'react';

const Header = ({ error }) => {
	return (
		<header className="header">
			<p className="header-text">Pokedex {error}</p>
		</header>
	);
};

export default Header;
