import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Screen from './Components/Screen';
import SearchBar from './Components/SearchBar';
import ButtonPad from './Components/ButtonPad';
import { PokemonProvider } from './Data/PokemonContext';

function App() {
	return (
		<div>
			<PokemonProvider>
				<Navbar />
				<Screen />
				<SearchBar />
				<ButtonPad />
			</PokemonProvider>
		</div>
	);
}

export default App;
