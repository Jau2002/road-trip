import { GET_ALL_COUNTRIES, GET_BY_NAME } from '../constants';

const inicialState = { allCountries: [] };

function countriesReducer(state = inicialState, { type, payload }) {
	switch (type) {
		case GET_ALL_COUNTRIES:
			return { ...state, allCountries: payload };

		case GET_BY_NAME:
			return { ...state, allCountries: payload };

		default:
			return { ...state };
	}
}

export default countriesReducer;
