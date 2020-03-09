import React from 'react';
const SearchBar = () => {
	const filter = () => {
		// Declare variables
		var input, filter, ul, li, a, i, txtValue;
		input = document.getElementById('pokeSearch');
		filter = input.value.toUpperCase();
		ul = document.getElementById('displayScreen');
		li = ul.getElementsByClassName('pokemons-screen-list');

		// Loop through all list items, and hide those who don't match the search query
		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName('h1')[0];
			txtValue = a.textContent || a.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				li[i].style.display = 'flex';
			} else {
				li[i].style.display = 'none';
			}
		}
	};

	return (
		<div className="searchbar">
			<input type="text" className="searchbar-input" placeholder="Search..." id="pokeSearch" onKeyUp={filter} />
			<button className="button">Search</button>
		</div>
	);
};

export default SearchBar;
