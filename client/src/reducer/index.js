import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
	countriesReducer,
	detailReducer,
});

export default rootReducer;
