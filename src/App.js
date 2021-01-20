import React from 'react';
import Main from './Components/Main';
import { PokemonProvider } from './Data/PokemonContext';

function App() {
	return (
		<div className="App">
			<PokemonProvider>
				<Main />
			</PokemonProvider>
		</div>
	);
}

export default App;
