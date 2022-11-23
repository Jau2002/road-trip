import { GET_ALL_ACTIVITIES, POST_ACTIVITY } from '../constants';

const inicialState = { activities: [] };

function activitiesReducer(state = inicialState, { type, payload }) {
	switch (type) {
		case POST_ACTIVITY:
			return { ...state };

		case GET_ALL_ACTIVITIES:
			return { ...state, activities: payload };

		default:
			return { ...state };
	}
}

export default activitiesReducer;
