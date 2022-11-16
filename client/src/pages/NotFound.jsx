import { Link, useRouteError } from 'react-router-dom';

function NotFound() {
	const { status, statusText } = useRouteError();
	return (
		<header className='Header-404'>
			<h2 className='Header-404-h2'>{status}</h2>
			<p className='Header-404-p'>{statusText}</p>
			<h3 className='Header-404-h3'>
				The page you´re looking for does not exist
			</h3>
			<Link to='/'>
				<input
					type='button'
					value='Go to Welcome'
					className='Header-404-input'
				/>
			</Link>
		</header>
	);
}

export default NotFound;
