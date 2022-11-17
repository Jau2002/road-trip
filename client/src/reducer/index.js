import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';

const rootReducer = combineReducers({
	countriesReducer,
});

export default rootReducer;
