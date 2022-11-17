import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../actions';
import { selectCountries } from '../constants';

function useMemory() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCountries());
	}, [dispatch]);

	const country = useSelector(selectCountries);

	return { country };
}

export default useMemory;
