import axios from 'axios';
import { GET_ALL_COUNTRIES } from '../constants';

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

export function getAllActivities() {}
