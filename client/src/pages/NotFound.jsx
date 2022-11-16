import { Link, useRouteError } from 'react-router-dom';

function NotFound() {
	const { status, statusText } = useRouteError();
	return (
		<header>
			<h2>{status}</h2>
			<p>{statusText}</p>
			<h3>The page you´re looking for does not exist</h3>
			<Link to='/'>
				<input
					type='button'
					value='Go to Welcome'
				/>
			</Link>
		</header>
	);
}

export default NotFound;
