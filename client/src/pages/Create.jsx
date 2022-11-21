import Image from '../components/Image';
import Nav from '../components/Nav';
import useGenerate from '../hooks/useGenerate';
import {
	finallyDate,
	initialDateToGoing,
	initialDateToLeaving,
	seasons,
} from '../utils/presets';

function Create() {
	const {
		input,
		errors,
		handleOnSubmit,
		handleInputChange,
		handleOnSelect,
		handleSelectDelete,
		handleOnReset,
		handleKeyDown,
		handleOnRemoveOption,
		handleInputDatalist,
		countries,
		reboot,
		verify,
	} = useGenerate();
	return (
		<article>
			<Image
				img='achieving-travel.jpg'
				alt='Background'
			/>
			<Nav />
			<aside>
				<h2>CREATE YOUR ACTIVITY</h2>
				<form onSubmit={handleOnSubmit}>
					<label htmlFor='name'>Name</label>
					<input
						id='name'
						name='name'
						type='text'
						placeholder='Swim'
						value={input.name}
						onChange={handleInputChange}
					/>
					{errors?.name && <p>{errors.name}</p>}
					<label htmlFor='countries'>Countries</label>
					<input
						id='countries'
						list='Countries'
						name='countries'
						type='text'
						placeholder='España'
						onChange={handleInputDatalist}
						onKeyDown={handleKeyDown}
					/>
					<datalist id='Countries'>
						{countries?.map(({ name }) => (
							<option
								key={name}
								value={name}
							/>
						))}
					</datalist>
					{!input.countries.length && <p>{errors.countries}</p>}
					<ul>
						{input.countries?.map((country) => (
							<li key={country}>
								<div>
									<p>{country}</p>
									<button
										type='button'
										onClick={() => handleOnRemoveOption(country)}
									>
										✘
									</button>
								</div>
							</li>
						))}
					</ul>
					<label htmlFor='going'>Going</label>
					<input
						id='going'
						name='going'
						type='date'
						min={initialDateToGoing}
						max={finallyDate}
						value={input.going}
						onChange={handleInputChange}
					/>
					{errors?.going && <p>{errors.going}</p>}
					<label htmlFor='leaving'>Leaving</label>
					<input
						id='leaving'
						name='leaving'
						type='date'
						min={initialDateToLeaving}
						max={finallyDate}
						value={input.leaving}
						onChange={handleInputChange}
					/>
					{errors?.leaving && <p>{errors.leaving}</p>}
					<label htmlFor='seasons'>Season</label>
					<select onChange={handleOnSelect}>
						{seasons?.map((season) => (
							<option
								key={season}
								value={season}
							>
								{season}
							</option>
						))}
					</select>
					{!input.seasons.length && <p>{errors.seasons}</p>}
					<ul>
						{input.seasons?.map((season) => (
							<li key={season}>
								<div>
									<p>{season}</p>
									<button
										type='button'
										onClick={() => handleSelectDelete(season)}
									>
										✘
									</button>
								</div>
							</li>
						))}
					</ul>
					<label htmlFor='difficulty'>Difficulty</label>
					<input
						id='difficulty'
						name='difficulty'
						type='number'
						min='1'
						max='5'
						value={input.difficulty}
						onChange={handleInputChange}
					/>
					{errors?.difficulty && <p>{errors.difficulty}</p>}
					<button
						type='button'
						disabled={!reboot}
						onClick={handleOnReset}
					>
						Reset
					</button>
					<button
						type='submit'
						disabled={!verify}
					>
						Create
					</button>
				</form>
			</aside>
		</article>
	);
}

export default Create;
