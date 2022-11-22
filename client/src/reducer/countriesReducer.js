import {
	FILTER_BY_CONTINENT,
	GET_ALL_COUNTRIES,
	GET_BY_NAME,
} from '../constants';

const inicialState = { allCountries: [] };

function countriesReducer(state = inicialState, { type, payload }) {
	switch (type) {
		case GET_ALL_COUNTRIES:
			return { ...state, allCountries: payload };

		case GET_BY_NAME:
			return { ...state, allCountries: payload };

		case FILTER_BY_CONTINENT:
			return {
				...state,
				allCountries:
					payload === 'All'
						? [...state.allCountries]
						: [
								...state.allCountries.filter(({ continent }) =>
									continent.includes(payload)
								),
						  ],
			};

		default:
			return { ...state };
	}
}

export default countriesReducer;
