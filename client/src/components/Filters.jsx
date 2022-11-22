import useSelection from '../hooks/useSelection';

function Filters() {
	const {
		handleFilterContinent,
		continentOption,
		handleOrderCountries,
		handleOrderPopulation,
	} = useSelection();
	return (
		<aside>
			<select onChange={handleFilterContinent}>
				<optgroup label='Continents' />
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
			<select onChange={handleOrderCountries}>
				<optgroup label='Alphabetical' />
				<option value='Default'>Default</option>
				<option value='Asc'>α ↓ ζ</option>
				<option value='Desc'>ζ ↓ α</option>
			</select>
			<select onChange={handleOrderPopulation}>
				<optgroup label='Population' />
				<option value='Default'>Default</option>
				<option value='low'>lowest</option>
				<option value='High'>highest</option>
			</select>
		</aside>
	);
}

export default Filters;
