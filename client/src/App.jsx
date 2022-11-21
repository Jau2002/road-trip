import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Create from './pages/Create';
import Details from './pages/Details';
import Home from './pages/Home';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import './scss/styles.scss';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			index: true,
			element: <Landing />,
			errorElement: <NotFound />,
		},
		{
			path: '/home',
			element: <Home />,
		},
		{
			path: '/country/:code',
			element: <Details />,
		},
		{
			path: '/country',
			element: <Create />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
