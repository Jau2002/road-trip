import {
	FILTER_BY_CONTINENT,
	GET_ALL_COUNTRIES,
	GET_BY_NAME,
	ORDER_BY_ALPHABETIC,
	ORDER_BY_POPULATION,
} from '../constants';

const inicialState = { allCountries: [], countries: [] };

function countriesReducer(state = inicialState, { type, payload }) {
	switch (type) {
		case GET_ALL_COUNTRIES:
			return { ...state, countries: payload, allCountries: payload };

		case GET_BY_NAME:
			return { ...state, countries: payload };

		case FILTER_BY_CONTINENT:
			return {
				...state,
				allCountries:
					payload === 'All'
						? [...state.countries]
						: [
								...state.countries.filter(({ continent }) =>
									continent.includes(payload)
								),
						  ],
			};

		case ORDER_BY_ALPHABETIC:
			return {
				...state,
				allCountries:
					payload === 'Desc'
						? [...state.countries].sort((a, b) =>
								a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1
						  )
						: [...state.countries].sort((a, b) =>
								a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
						  ),
			};

		case ORDER_BY_POPULATION:
			return {
				...state,
				allCountries:
					payload === 'low'
						? [...state.countries].sort((a, b) =>
								a.population > b.population ? 1 : -1
						  )
						: [...state.countries].sort((a, b) =>
								a.population < b.population ? 1 : -1
						  ),
			};

		default:
			return { ...state };
	}
}

export default countriesReducer;
