import Image from '../components/Image';
import Nav from '../components/Nav';
import useCharacteristic from '../hooks/useCharacteristic';

function Details() {
	const { details } = useCharacteristic();
	return (
		<article>
			<Image
				img='achieving-travel.jpg'
				alt='Background'
			/>
			<Nav />
			{details.length ? (
				<section className='Section-detail'>
					<img
						src={details[0].flag}
						alt={details[0].name}
						className='Section-detail-img'
					/>
					<span className='Section-detail-span'>{details[0].code}</span>
					<div className='Section-detail-div'>
						<h3 className='Section-detail-h3'>Activities</h3>
						<ul className='Section-detail-ul'>
							{details[0].activities.length ? (
								details[0].activities.map(
									({ id, name, difficulty, leaving, going, seasons }) => (
										<div key={id}>
											<h4>{name}</h4>
											<p>{difficulty}</p>
											<h5>{leaving}</h5>
											<h5>{going}</h5>
											{seasons?.map((season) => (
												<span key={season}>{season}</span>
											))}
											{/* <h6>{country_activity}</h6> */}
											{/* {country_activity?.map((country_activity) => (
												<span key={activity}>{activity}</span>
											))} */}
										</div>
									)
								)
							) : (
								<li className='Section-detail-li'>
									does not contain information
								</li>
							)}
						</ul>
					</div>
					<main className='main-detail'>
						<h2 className='main-detail-h2'>{details[0].name}</h2>
						<div className='main-detail-div'>
							<p className='main-detail-p'>Continent:</p>
							<blockquote className='main-detail-blockquote'>
								{details[0].continent}
							</blockquote>
						</div>
						<div className='main-detail-div'>
							<p className='main-detail-p'>Capital:</p>
							<blockquote className='main-detail-blockquote'>
								{details[0].capital || 'does not contain information'}
							</blockquote>
						</div>
						<div className='main-detail-div'>
							<p className='main-detail-p'>Subregion:</p>
							<blockquote className='main-detail-blockquote'>
								{details[0].subregion || 'does not contain information'}
							</blockquote>
						</div>
						<div className='main-detail-div'>
							<p className='main-detail-p'>Population:</p>
							<blockquote className='main-detail-blockquote'>
								{details[0].population || 'does not contain information'}
							</blockquote>
						</div>
						<div className='main-detail-div'>
							<p className='main-detail-p'>Area:</p>
							<blockquote className='main-detail-blockquote'>
								{details[0].area || 'does not contain information'}
							</blockquote>
						</div>
					</main>
				</section>
			) : (
				<Image
					img='pre-loader.gif'
					alt='Loading...'
					preloader
				/>
			)}
		</article>
	);
}

export default Details;
