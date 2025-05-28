import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		fs: {
			// Allow serving files from one level up from the package root
			strict: false
		}
	},
	build: {
		sourcemap: true
	},
	optimizeDeps: {
		exclude: [
			'@sveltejs/kit',
			'@egjs/svelte-grid',
			'svelte',
			'svelte/internal',
			'svelte/store',
			'svelte/transition'
		]
	}
});
