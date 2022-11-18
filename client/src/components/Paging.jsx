import Operating from '../utils/Operating';

function Paging({ handleOnClick }) {
	const { totalPages } = Operating();
	return (
		<footer className='Footer'>
			{totalPages?.map((num) => (
				<button
					type='button'
					key={num}
					onClick={() => handleOnClick(num)}
					className='Footer-button'
				>
					{num}
				</button>
			))}
		</footer>
	);
}

export default Paging;
