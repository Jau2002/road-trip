import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCountries, postActivity } from '../actions';
import { selectCountries } from '../constants';
import { defaultInputsValue } from '../utils/presets';
import validate from '../utils/validate';

function useGenerate() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCountries());
	}, [dispatch]);

	const countries = useSelector(selectCountries);

	const [input, setInput] = useState(defaultInputsValue);

	const reboot =
		input?.name ||
		input?.difficulty ||
		input?.going ||
		input?.leaving ||
		input?.seasons.length;

	const handleOnReset = () => setInput(defaultInputsValue);

	const [errors, setErrors] = useState({});

	const verify =
		!errors.name &&
		!errors.going &&
		!errors.leaving &&
		Boolean(input.seasons.length) &&
		Boolean(input.countries.length);

	const navigate = useNavigate();

	const handleOnSubmit = (event) => {
		event.preventDefault();
		if (verify) {
			dispatch(postActivity(input));
			alert('Activity created successfully');
			navigate('/home');
		}
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		const newState = { ...input, [name]: value };
		setInput(newState);
		setErrors(validate(newState));
	};

	const handleOnSelect = (event) => {
		const { value } = event.target;
		setInput({
			...input,
			seasons: input.seasons.some((s) => s.includes(value))
				? [...input.seasons]
				: [...input.seasons, value],
		});
	};

	const handleSelectDelete = (season) =>
		setInput({ ...input, seasons: input.seasons.filter((s) => s !== season) });

	const handleInputDatalist = (event) => {
		const { value } = event.target;
		setInput({ ...input, [input.countries]: value });
	};

	const handleKeyDown = (event) => {
		const { key, target } = event;
		if (key === 'Enter' && target.value !== '') {
			setInput({
				...input,
				countries: input.countries?.some((c) =>
					c.toUpperCase().includes(target.value.toUpperCase())
				)
					? [...input.countries]
					: [...input.countries, target.value],
			});
			target.value = '';
		}
	};

	const handleOnRemoveOption = (country) =>
		setInput({
			...input,
			countries: input.countries.filter((c) => c !== country),
		});

	return {
		input,
		errors,
		handleOnSubmit,
		handleInputChange,
		handleOnReset,
		handleSelectDelete,
		handleOnSelect,
		handleInputDatalist,
		handleOnRemoveOption,
		handleKeyDown,
		countries,
		reboot,
		verify,
	};
}

export default useGenerate;
