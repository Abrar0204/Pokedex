import React from 'react';
import bigButton from '../res/bigButton.svg';
import smallButton from '../res/smallButton.svg';
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="bigButtonImg">
				<img src={bigButton} alt="Big Button" />
			</div>
			<div className="smallButtonImg">
				<img src={smallButton} alt="Small Button" />
			</div>
		</nav>
	);
};

export default Navbar;
