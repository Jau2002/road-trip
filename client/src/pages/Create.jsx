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
			<main className='Create'>
				<h2 className='Create-h2'>CREATE YOUR ACTIVITY</h2>
				<form
					onSubmit={handleOnSubmit}
					className='Form'
				>
					<div className='Form-div'>
						<label htmlFor='name'>Name</label>
						<input
							id='name'
							name='name'
							type='text'
							placeholder='Swim'
							className='Form-input'
							value={input.name}
							onChange={handleInputChange}
						/>
					</div>
					{errors?.name && <p className='Form-p'>{errors.name}</p>}
					<div className='Form-div'>
						<label htmlFor='countries'>Countries</label>
						<input
							id='countries'
							list='Countries'
							name='countries'
							type='text'
							placeholder='España'
							className='Form-input'
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
					</div>
					{!input.countries.length && (
						<p className='Form-p'>{errors.countries}</p>
					)}
					<ul className='Create-ul'>
						{input.countries?.map((country) => (
							<li
								key={country}
								className='Create-li'
							>
								<p className='Create-p'>{country}</p>
								<button
									type='button'
									onClick={() => handleOnRemoveOption(country)}
									className='Create-button'
								>
									✘
								</button>
							</li>
						))}
					</ul>
					<div className='Form-div'>
						<label htmlFor='going'>Going</label>
						<input
							id='going'
							name='going'
							type='date'
							className='Form-input'
							min={initialDateToGoing}
							max={finallyDate}
							value={input.going}
							onChange={handleInputChange}
						/>
					</div>
					{errors?.going && <p className='Form-p'>{errors.going}</p>}
					<div className='Form-div'>
						<label htmlFor='leaving'>Leaving</label>
						<input
							id='leaving'
							name='leaving'
							type='date'
							className='Form-input'
							min={initialDateToLeaving}
							max={finallyDate}
							value={input.leaving}
							onChange={handleInputChange}
						/>
					</div>
					{errors?.leaving && <p className='Form-p'>{errors.leaving}</p>}
					<div className='Form-div'>
						<label htmlFor='seasons'>Season</label>
						<select
							onChange={handleOnSelect}
							className='Form-select'
						>
							{seasons?.map((season) => (
								<option
									key={season}
									value={season}
									className='Form-option'
								>
									{season}
								</option>
							))}
						</select>
					</div>
					{!input.seasons.length && <p className='Form-p'>{errors.seasons}</p>}
					<ul className='Create-ul'>
						{input.seasons?.map((season) => (
							<li
								key={season}
								className='Create-li'
							>
								<p className='Create-p'>{season}</p>
								<button
									type='button'
									onClick={() => handleSelectDelete(season)}
									className='Create-button'
								>
									✘
								</button>
							</li>
						))}
					</ul>
					<div className='Form-div'>
						<label htmlFor='difficulty'>Difficulty</label>
						<input
							id='difficulty'
							name='difficulty'
							type='number'
							className='Form-input'
							min='1'
							max='5'
							value={input.difficulty}
							onChange={handleInputChange}
						/>
					</div>
					{errors?.difficulty && <p className='Form-p'>{errors.difficulty}</p>}
					<div className='Form-div_buttons'>
						<button
							type='button'
							disabled={!reboot}
							onClick={handleOnReset}
							className={
								reboot ? 'Form-button_isActive' : 'Form-button_disabled'
							}
						>
							Reset
						</button>
						<button
							type='submit'
							disabled={!verify}
							className={
								verify ? 'Form-button_isActive' : 'Form-button_disabled'
							}
						>
							Create
						</button>
					</div>
				</form>
			</main>
		</article>
	);
}

export default Create;
