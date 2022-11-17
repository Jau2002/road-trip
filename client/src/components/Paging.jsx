import Operating from '../utils/Operating';

function Paging({ handleOnClick }) {
	const { totalPages } = Operating();
	return (
		<footer>
			{totalPages?.map((num) => (
				<button
					type='button'
					key={num}
					onClick={() => handleOnClick(num)}
				>
					{num}
				</button>
			))}
		</footer>
	);
}

export default Paging;
