<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header/Header.svelte';
	import SwitchInput from '$lib/components/SwitchInput/SwitchInput.svelte';
	import { theme, toggleTheme } from '$lib/stores/theme';

	const handleToggle = () => {
		toggleTheme();
	};
</script>

<div class="layout">
	<Header />

	<slot />

	<footer class="layout__theme-footer">
		<SwitchInput checked={$theme === 'dark'} onchange={handleToggle} />
	</footer>
</div>

<style>
	.layout {
		margin: 0 auto;
		padding: 0 0.5rem;
		text-align: center;
	}

	@media (min-width: 768px) {
		.layout {
			padding: 0 2.5rem;
		}
	}

	.layout__theme-footer {
		position: fixed;
		bottom: 0;
		right: 0;
	}
</style>
