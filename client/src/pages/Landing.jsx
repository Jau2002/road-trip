import Routes from '../components/Routes';

function Landing() {
	return (
		<main>
			<img
				src='/public/bg-landing.jpg'
				alt='Background'
				className='u-bg-vh'
			/>
			<header className='Header'>
				<h1 className='Header-h1'>Welcome!</h1>
				<Routes />
			</header>
		</main>
	);
}

export default Landing;
