import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../actions';
import { selectDetail } from '../constants';

function useCharacteristic() {
	const { code } = useParams();
	const dispatch = useDispatch();

	const details = useSelector(selectDetail);

	useEffect(() => {
		dispatch(getDetail(code));
	}, [dispatch]);

	return { details };
}

export default useCharacteristic;
