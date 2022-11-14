/* eslint-disable */

//			       _..oo8"""Y8b.._
//			     .88888888o.    "Yb.
//			   .d888P""Y8888b      "b.
//			  o88888    88888)       "b
//			 d888888b..d8888P         'b
//			 88888888888888"           8
//		  (88DWB8888888P             8)
//			 8888888888P               8
//			 Y88888888P     ee        .P
//			  Y888888(     8888      oP
//			   "Y88888b     ""     oP"
//			     "Y8888o._     _.oP"
//			       `""Y888boodP""'

/* eslint-enable */

import axios from 'axios';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

axios.defaults.baseURL =
	import.meta.env.VITE_APP_API || 'http://localhost:3001';

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
