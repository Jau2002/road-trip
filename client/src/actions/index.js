import axios from 'axios';
import { GET_ALL_COUNTRIES, GET_BY_NAME, GET_DETAIL } from '../constants';

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
