import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './routes/Landing';
import './scss/generic.scss';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			index: true,
			element: <Landing />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
