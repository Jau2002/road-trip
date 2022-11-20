import { combineReducers } from 'redux';
import activitiesReducer from './activitiesReducer';
import countriesReducer from './countriesReducer';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
	countriesReducer,
	detailReducer,
	activitiesReducer,
});

export default rootReducer;
