import Bar from './Bar';
import Routes from './Routes';

function Nav() {
	return (
		<nav className='u-nav'>
			<Routes />
			<h1 className='u-h1'>ROAD TRIP</h1>
			<Bar />
		</nav>
	);
}

export default Nav;
