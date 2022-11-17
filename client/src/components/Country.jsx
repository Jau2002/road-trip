function Country({ name, continent, flag }) {
	return (
		<section>
			<img
				src={flag}
				alt={continent}
				loading='lazy'
			/>
			<h3>{name}</h3>
			<h4>{continent}</h4>
		</section>
	);
}

export default Country;
