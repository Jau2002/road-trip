import { Link, useLocation } from 'react-router-dom';
import { routes, socialNetworks } from '../utils/domain';

function Routes() {
	const { pathname } = useLocation();
	return (
		<nav className='u-flex'>
			{routes.map(({ id, path, route, abstract }) => (
				<Link
					key={id}
					to={path}
				>
					<img
						className={pathname === '/' ? 'u-socials' : null}
						src={route}
						alt={abstract}
					/>
				</Link>
			))}
			{pathname === '/' &&
				socialNetworks.map(({ id, link, redes, description }) => (
					<a
						key={id}
						href={link}
						target='_blank'
						rel='noreferrer'
					>
						<img
							className='u-socials'
							src={redes}
							alt={description}
						/>
					</a>
				))}
		</nav>
	);
}

export default Routes;
