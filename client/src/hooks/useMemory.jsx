import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../actions';
import { selectCountries } from '../constants';

function useMemory() {
	const dispatch = useDispatch();

	const country = useSelector(selectCountries);

	useEffect(() => {
		dispatch(getAllCountries());
	}, [dispatch]);

	return { country };
}

export default useMemory;
