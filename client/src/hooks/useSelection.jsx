import { useDispatch, useSelector } from 'react-redux';
import { filterByContinent } from '../actions';
import { selectAllCountries } from '../constants';

function useSelection() {
	const dispatch = useDispatch();

	const handleFilterContinent = (event) =>
		dispatch(filterByContinent(event.target.value));

	const countries = useSelector(selectAllCountries);

	const allContinent = countries.map(({ continent }) => continent);

	const continentOption = allContinent.filter(
		(item, index) => allContinent.indexOf(item) === index
	);

	return { handleFilterContinent, continentOption };
}

export default useSelection;
