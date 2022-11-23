import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	filterByActivity,
	filterByContinent,
	getAllActivities,
	orderByAlphabetic,
	orderByPopulation,
} from '../actions';

import { selectActivities, selectAllCountries } from '../constants';

import useManagement from './useManagement';

function useSelection() {
	const { setCurrentPage } = useManagement();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllActivities());
	}, [dispatch]);

	const countries = useSelector(selectAllCountries);

	const allContinent = countries.map(({ continent }) => continent);

	const continentOption = allContinent.filter(
		(item, index) => allContinent.indexOf(item) === index
	);

	const handleFilterContinent = (event) =>
		dispatch(filterByContinent(event.target.value));

	const handleOrderCountries = (event) => {
		const { value } = event.target;
		dispatch(orderByAlphabetic(value));
		setCurrentPage(1);
	};

	const handleOrderPopulation = (event) => {
		const { value } = event.target;
		dispatch(orderByPopulation(value));
		setCurrentPage(1);
	};

	const activities = useSelector(selectActivities);

	const handleFilterActivity = (event) =>
		dispatch(filterByActivity(event.target.value));

	return {
		handleFilterContinent,
		continentOption,
		handleOrderCountries,
		handleOrderPopulation,
		activities,
		handleFilterActivity,
	};
}

export default useSelection;
