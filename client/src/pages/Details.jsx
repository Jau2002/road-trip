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
				<section>
					<div>
						<img
							src={details[0].flag}
							alt={details[0].name}
						/>
						<span>{details[0].code}</span>
						<main>
							<h2>{details[0].name}</h2>
							<div>
								<p>Continent:</p>
								<blockquote>{details[0].continent}</blockquote>
								<p>Capital:</p>
								<blockquote>
									{details[0].capital || 'does not contain information'}
								</blockquote>
								<p>Subregion:</p>
								<blockquote>
									{details[0].subregion || 'does not contain information'}
								</blockquote>
								<p>Population:</p>
								<blockquote>
									{details[0].population || 'does not contain information'}
								</blockquote>
								<p>Area:</p>
								<blockquote>
									{details[0].area || 'does not contain information'}
								</blockquote>
								<h3>Activities</h3>
								<ul>
									{details[0].activities.length ? (
										details[0].activities.map((a) => <li key={a}>{a}</li>)
									) : (
										<li>does not contain information</li>
									)}
								</ul>
							</div>
						</main>
					</div>
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
