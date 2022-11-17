import { GET_ALL_COUNTRIES } from '../constants';

const inicialState = { allCountries: [] };

function countriesReducer(state = inicialState, { type, payload }) {
	switch (type) {
		case GET_ALL_COUNTRIES:
			return { ...state, allCountries: payload };

		default:
			return { ...state };
	}
}

export default countriesReducer;
