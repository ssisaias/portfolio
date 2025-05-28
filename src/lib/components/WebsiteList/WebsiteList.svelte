<script lang="ts">
	import { onMount } from 'svelte';

	import websites from '$lib/db/sites.json';
	import WebsiteCard from '../WebsiteCard/WebsiteCard.svelte';
	import type { CardItem } from '../../../types/apptypes';

	let items: CardItem[] = websites;

	onMount(() => {
		items = JSON.parse(JSON.stringify(websites));
	});
</script>

<div class="website-list">
	{#if items.length > 0}
		<div class="website-list__grid">
			{#each items as item (item.id)}
				<WebsiteCard cardItem={item} />
			{/each}
		</div>
	{:else}
		<h3>Não achamos nada :(</h3>
	{/if}
</div>

<style>
	.website-list {
		width: 100%;
        padding: 1rem 0;
        margin: 0 auto;
	}

	.website-list__grid {
		display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
	}

</style>
