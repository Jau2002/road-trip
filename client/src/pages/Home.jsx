import Country from '../components/Country';
import useMemory from '../hooks/useMemory';

function Home() {
	const { country } = useMemory();
	return (
		<main>
			<article>
				{country.length ? (
					country.map(({ code, name, continent, flag }) => (
						<Country
							key={code}
							name={name}
							continent={continent}
							flag={flag}
						/>
					))
				) : (
					<img
						src='/public/pre-loader.gif'
						alt='Loading...'
					/>
				)}
			</article>
		</main>
	);
}

export default Home;
