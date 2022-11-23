import useSelection from '../hooks/useSelection';

function Filters() {
	const {
		handleFilterContinent,
		continentOption,
		handleOrderCountries,
		handleOrderPopulation,
		activities,
		handleFilterActivity,
	} = useSelection();
	return (
		<aside className='Aside'>
			<select
				onChange={handleFilterContinent}
				className='Aside-select'
			>
				<optgroup
					label='Continents'
					className='Aside-optgroup'
				/>
				<option
					className='Aside-option'
					value='All'
				>
					All
				</option>
				{continentOption?.map((c) => (
					<option
						value={c}
						key={c}
						className='Aside-option'
					>
						{c}
					</option>
				))}
			</select>
			<select
				onChange={handleOrderCountries}
				className='Aside-select'
			>
				<optgroup
					label='Alphabetical'
					className='Aside-optgroup'
				/>
				<option
					value='Default'
					className='Aside-option'
				>
					Default
				</option>
				<option
					value='Asc'
					className='Aside-option'
				>
					α ↓ ζ
				</option>
				<option
					value='Desc'
					className='Aside-option'
				>
					ζ ↓ α
				</option>
			</select>
			<select
				onChange={handleOrderPopulation}
				className='Aside-select'
			>
				<optgroup
					label='Population'
					className='Aside-optgroup'
				/>
				<option
					value='Default'
					className='Aside-option'
				>
					Default
				</option>
				<option
					value='low'
					className='Aside-option'
				>
					lowest
				</option>
				<option
					value='High'
					className='Aside-option'
				>
					highest
				</option>
			</select>
			<select
				onChange={handleFilterActivity}
				className='Aside-select'
			>
				<optgroup
					label='Activities'
					className='Aside-optgroup'
				/>
				<option
					value='All'
					className='Aside-option'
				>
					All
				</option>
				{activities?.map(({ id, name }) => (
					<option
						value={name}
						key={id}
						className='Aside-option'
					>
						{name}
					</option>
				))}
			</select>
		</aside>
	);
}

export default Filters;
