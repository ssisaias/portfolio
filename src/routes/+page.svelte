<script lang="ts">
	import WebsiteList from '$lib/components/WebsiteList/WebsiteList.svelte';
</script>

<main class="home">
	<WebsiteList />
</main>

<style>
	.home {
		margin-top: 1rem;
		padding: 0 1rem;
		display: flex;
		justify-content: center;
	}

	@media (min-width: 768px) {
		.home {
			padding: 0 2rem;
		}
	}
</style>
