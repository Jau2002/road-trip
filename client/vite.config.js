import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default () => {
	const server = {
		host: true,
		open: true,
		port: 3000,
	};

	const test = {
		environment: 'happy-dom',
		includes: ['**/test/integration/**/*.spec.js'],
	};

	return defineConfig({
		server,
		plugins: [react()],
		test,
	});
};
