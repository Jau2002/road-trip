import useSelection from '../hooks/useSelection';

function Filters() {
	const { handleFilterContinent, continentOption } = useSelection();
	return (
		<aside>
			<select onChange={handleFilterContinent}>
				<option value='All'>All</option>
				{continentOption?.map((c) => (
					<option
						value={c}
						key={c}
					>
						{c}
					</option>
				))}
			</select>
		</aside>
	);
}

export default Filters;
