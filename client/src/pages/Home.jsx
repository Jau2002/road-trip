import Country from '../components/Country';
import Image from '../components/Image';
import Nav from '../components/Nav';
import Paging from '../components/Paging';
import useManagement from '../hooks/useManagement';

function Home() {
	const { totalRecords, handleOnClick } = useManagement();
	return (
		<main>
			<Image
				img='achieving-travel.jpg'
				alt='Background'
			/>
			<Nav />
			<article className='u-article'>
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
					<Image
						img='pre-loader.gif'
						alt='Loading...'
						preloader
					/>
				)}
			</article>
			<Paging handleOnClick={handleOnClick} />
		</main>
	);
}

export default Home;
