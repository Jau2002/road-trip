export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';

export const selectCountries = (state) => state.countriesReducer.countries;

export const GET_BY_NAME = 'GET_BY_NAME';

export const GET_DETAIL = 'GET_DETAIL';

export const selectDetail = (state) => state.detailReducer.detail;

export const POST_ACTIVITY = 'POST_ACTIVITY';

export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';

export const selectAllCountries = (state) =>
	state.countriesReducer.allCountries;

export const ORDER_BY_ALPHABETIC = 'ORDER_BY_ALPHABETIC';

export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';

export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';

export const selectActivities = (state) => state.activitiesReducer.activities;

export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';
