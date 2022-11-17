import { useState } from 'react';
import useMemory from './useMemory';

function useManagement() {
	const { country } = useMemory();

	const [currentPage, setCurrentPage] = useState(1);

	const handleOnClick = (page) => {
		setCurrentPage(page);
	};

	const pageLimit = 10;

	const previousPage = currentPage * pageLimit;

	const nextPage = previousPage - pageLimit;

	const totalRecords = country.slice(nextPage, previousPage);

	return { totalRecords, handleOnClick, pageLimit };
}

export default useManagement;
