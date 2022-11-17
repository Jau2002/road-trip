import Country from '../components/Country';
import Paging from '../components/Paging';
import useManagement from '../hooks/useManagement';

function Home() {
	const { totalRecords, handleOnClick } = useManagement();
	return (
		<main>
			<article>
				{totalRecords.length ? (
					totalRecords.map(({ code, name, continent, flag }) => (
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
			<Paging handleOnClick={handleOnClick} />
		</main>
	);
}

export default Home;
