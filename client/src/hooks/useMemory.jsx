import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../actions';
import { selectAllCountries } from '../constants';

function useMemory() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCountries());
	}, [dispatch]);

	const country = useSelector(selectAllCountries);

	return { country };
}

export default useMemory;
