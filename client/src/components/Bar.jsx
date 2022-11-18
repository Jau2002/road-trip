import useSearch from '../hooks/useSearch';

function Bar() {
	const { handleOnSubmit, search, handleOnChange } = useSearch();
	return (
		<form onSubmit={handleOnSubmit}>
			<label htmlFor='country'>Search</label>
			<input
				type='text'
				spellCheck='true'
				id='country'
				placeholder='Countries...'
				value={search}
				onChange={handleOnChange}
			/>
		</form>
	);
}

export default Bar;
