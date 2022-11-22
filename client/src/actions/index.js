import axios from 'axios';
import {
	FILTER_BY_CONTINENT,
	GET_ALL_COUNTRIES,
	GET_BY_NAME,
	GET_DETAIL,
	ORDER_BY_ALPHABETIC,
	ORDER_BY_POPULATION,
	POST_ACTIVITY,
} from '../constants';

export function getAllCountries() {
	return async (dispatch) => {
		const { data } = await axios.get('/countries');
		try {
			return dispatch({ type: GET_ALL_COUNTRIES, payload: data });
		} catch (err) {
			throw new Error(err);
		}
	};
}

export function getByName(country) {
	return async (dispatch) => {
		const { data } = await axios.get(`/countries?name=${country}`);
		try {
			return dispatch({ type: GET_BY_NAME, payload: data });
		} catch (err) {
			throw new Error(err);
		}
	};
}

export function getDetail(code) {
	return async (dispatch) => {
		const { data } = await axios.get(`/countries/${code}`);
		try {
			return dispatch({ type: GET_DETAIL, payload: data });
		} catch (err) {
			throw new Error(err);
		}
	};
}

export function postActivity(body) {
	return async (dispatch) => {
		const { data } = await axios.post('/activities', body);
		try {
			return dispatch({ type: POST_ACTIVITY, payload: data });
		} catch (err) {
			throw new Error(err);
		}
	};
}

export const filterByContinent = (payload) => ({
	type: FILTER_BY_CONTINENT,
	payload,
});

export const orderByAlphabetic = (payload) => ({
	type: ORDER_BY_ALPHABETIC,
	payload,
});

export const orderByPopulation = (payload) => ({
	type: ORDER_BY_POPULATION,
	payload,
});
