import useSearch from '../hooks/useSearch';

function Bar() {
	const { handleOnSubmit, search, handleOnChange } = useSearch();
	return (
		<form
			onSubmit={handleOnSubmit}
			className='Bar'
		>
			<label
				htmlFor='country'
				className='Bar-label'
			>
				Search
			</label>
			<input
				type='text'
				spellCheck='true'
				id='country'
				placeholder='Countries...'
				value={search}
				onChange={handleOnChange}
				className='Bar-input'
			/>
		</form>
	);
}

export default Bar;
