export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';

export const selectCountries = (state) => state.countriesReducer.countries;

export const GET_BY_NAME = 'GET_BY_NAME';

export const GET_DETAIL = 'GET_DETAIL';

export const selectDetail = (state) => state.detailReducer.detail;

export const POST_ACTIVITY = 'POST_ACTIVITY';

export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';

export const selectAllCountries = (state) =>
	state.countriesReducer.allCountries;
