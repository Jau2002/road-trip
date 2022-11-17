import useManagement from '../hooks/useManagement';
import useMemory from '../hooks/useMemory';

function Operating() {
	const { pageLimit } = useManagement();
	const { country } = useMemory();

	const totalPages = [];

	for (let i = 1; i <= Math.ceil(country.length / pageLimit); i++) {
		totalPages.push(i);
	}

	return { totalPages };
}

export default Operating;
