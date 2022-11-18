import axios from 'axios';
import { GET_ALL_COUNTRIES, GET_BY_NAME } from '../constants';

export function getAllCountries() {
	return async (dispatch) => {
		try {
			const { data } = await axios.get('/countries');
			return dispatch({ type: GET_ALL_COUNTRIES, payload: data });
		} catch (err) {
			throw new Error(err);
		}
	};
}

export function getByName(country) {
	return async (dispatch) => {
		const { data } = await axios.get(`/countries?name=${country}`);
		return dispatch({ type: GET_BY_NAME, payload: data });
	};
}
