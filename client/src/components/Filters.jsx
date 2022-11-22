import useSelection from '../hooks/useSelection';

function Filters() {
	const { handleFilterContinent, continentOption, handleOrderCountries } =
		useSelection();
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
		</aside>
	);
}

export default Filters;
