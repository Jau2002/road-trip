import { useLocation } from 'react-router-dom';
import Bar from './Bar';
import Filters from './Filters';
import Routes from './Routes';

function Nav() {
	const { pathname } = useLocation();
	return (
		<nav className='u-nav'>
			<Routes />
			<h1 className='u-h1'>ROAD TRIP</h1>
			{pathname === '/home' && <Filters />}
			{pathname === '/home' && <Bar />}
		</nav>
	);
}

export default Nav;
