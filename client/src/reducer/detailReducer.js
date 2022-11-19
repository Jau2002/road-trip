import { GET_DETAIL } from '../constants';

const inicialState = { detail: {} };

function detailReducer(state = inicialState, { type, payload }) {
	switch (type) {
		case GET_DETAIL:
			return { ...state, detail: payload };

		default:
			return { ...state };
	}
}

export default detailReducer;
