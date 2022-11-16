import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
	]);
	return <RouterProvider router={router} />;
}

export default App;
