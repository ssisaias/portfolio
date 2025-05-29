<script lang="ts">
	import { BookOpenText } from 'phosphor-svelte';
</script>

<header class="header">
	<nav>
		<a href="https://www.isaiasdevlog.com" title="back to blog" class="toTheRight">
			<BookOpenText size={28} />
		</a>
	</nav>
</header>

<style>
	.header {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		z-index: 10;
		padding: 0.5rem 1rem;
	}

	.header :hover {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.toTheRight {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border: 1px solid transparent;
		transition: all 0.3s;
	}
	.toTheRight:hover {
		border-radius: 20%;
		border: 1px solid var(--cyan-dark);
		background-color: var(--background-secondary);
	}
</style>
