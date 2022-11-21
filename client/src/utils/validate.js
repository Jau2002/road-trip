function validate({ name, going, leaving, seasons, countries }) {
	const message = {};
	if (!name) {
		message.name = 'It`s Name is required';
	} else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ /s]*$/.test(name)) {
		message.name = 'It`s Name has an invalid format';
	}

	if (!going) {
		message.going = 'Requires an average date';
	}

	if (!leaving) {
		message.leaving = 'Requires an average date';
	}

	if (!seasons.length) {
		message.seasons = 'You must at least see one season';
	}

	if (!countries.length) {
		message.countries = 'Should have at least one country';
	}
	return message;
}

export default validate;
