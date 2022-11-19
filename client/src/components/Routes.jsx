import { Link, useLocation } from 'react-router-dom';
import { rootRoute, routes, socialNetworks } from '../utils/domain';

function Routes() {
	const { pathname } = useLocation();
	return (
		<nav className='u-flex'>
			{pathname === '/home' ? (
				routes.map(({ id, path, route, abstract }) => (
					<Link
						key={id}
						to={path}
					>
						<img
							src={route}
							alt={abstract}
						/>
					</Link>
				))
			) : (
				<Link
					key={rootRoute.id}
					to={rootRoute.path}
				>
					<img
						src={rootRoute.route}
						className={pathname === '/' ? 'u-socials' : null}
						alt={rootRoute.abstract}
					/>
				</Link>
			)}
			{(pathname === '/' || pathname.includes('/country')) &&
				socialNetworks.map(({ id, link, redes, description }) => (
					<a
						key={id}
						href={link}
						target='_blank'
						rel='noreferrer'
					>
						<img
							className={pathname === '/' ? 'u-socials' : null}
							src={redes}
							alt={description}
						/>
					</a>
				))}
		</nav>
	);
}

export default Routes;
