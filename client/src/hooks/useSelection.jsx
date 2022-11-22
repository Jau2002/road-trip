import { useDispatch, useSelector } from 'react-redux';
import { filterByContinent, orderByAlphabetic } from '../actions';
import { selectAllCountries } from '../constants';
import useManagement from './useManagement';

function useSelection() {
	const { setCurrentPage } = useManagement();

	const dispatch = useDispatch();

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

	return { handleFilterContinent, continentOption, handleOrderCountries };
}

export default useSelection;
