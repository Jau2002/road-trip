import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getByName } from '../actions';

function useSearch() {
	const dispatch = useDispatch();

	const [search, setSearch] = useState();

	const handleOnSubmit = (event) => {
		event.preventDefault();
		setSearch('');
	};
	const handleOnChange = (event) => {
		setSearch(event.target.value);
		dispatch(getByName(search));
	};
	return { handleOnSubmit, search, handleOnChange };
}

export default useSearch;
