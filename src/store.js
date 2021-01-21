import { createStore, combineReducers, applyMiddleware } from 'redux';
import { getPokemonsReducer, setSelectedPokemonReducer, toggleHiddenCardReducer } from './reducers/pokemonReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [ thunk ];

const reducers = combineReducers({
	pokemonList: getPokemonsReducer,
	selectedPokemonDetails: setSelectedPokemonReducer,
	cardHidden: toggleHiddenCardReducer
});

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
