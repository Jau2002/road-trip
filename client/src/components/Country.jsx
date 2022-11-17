function Country({ name, continent, flag }) {
	return (
		<section className='Section'>
			<img
				src={flag}
				alt={continent}
				loading='lazy'
				className='Section-img'
			/>
			<summary className='Section-summary'>
				<h3 className='Section-h3'>{name}</h3>
				<h4 className='Section-h4'>{continent}</h4>
				<div className='Section-div'>
					<img
						src='/public/icon-arrow.png'
						alt=''
						className='Section-img_icon'
					/>
				</div>
			</summary>
		</section>
	);
}

export default Country;
