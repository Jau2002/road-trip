import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		open: true,
		port: 3000,
	},
	test: {
		environment: 'happy-dom',
		includes: ['**/test/integration/**/*.spec.js'],
	},
});
