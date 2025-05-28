import { writable } from 'svelte/store';

const isBrowser = typeof window !== 'undefined';

const storedTheme = isBrowser
	? ((localStorage.getItem('theme') as 'light' | 'dark') ?? 'dark')
	: 'dark';

export const theme = writable<'light' | 'dark'>(storedTheme);

if (isBrowser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		const root = document.documentElement;
		root.setAttribute('data-theme', value);
	});
}

export function toggleTheme() {
	theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
}
