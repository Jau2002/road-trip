import { POST_ACTIVITY } from '../constants';

const inicialState = { activities: [] };

function activitiesReducer(state = inicialState, { type }) {
	switch (type) {
		case POST_ACTIVITY:
			return { ...state };

		default:
			return { ...state };
	}
}

export default activitiesReducer;
