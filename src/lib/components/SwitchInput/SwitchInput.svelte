<script lang="ts">
	import { Moon, Sun } from 'phosphor-svelte';

	export let checked: boolean;
	export let onchange: () => void;
</script>

<label class="switch">
	<input type="checkbox" class="switch__input" bind:checked {onchange} />
	<span class="switch__slider">
		{#if checked}
			<Moon size={14} weight="fill" />
		{:else}
			<Sun size={14} />
		{/if}
	</span>
</label>

<style>
	.switch {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
		width: 24px;
		height: 24px;
		border-radius: 100px;
		border: 2px solid var(--toggle-button);
		position: relative;
		margin-right: 0.6rem;
	}

	.switch__input {
		opacity: 0;
		width: 0;
		height: 0;
		position: absolute;
	}

	.switch__slider {
		position: absolute;
		left: 2px;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background-color: var(--toggle-button);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.2s, background-color 0.3s;
		color: white;
	}

	.switch:active .switch__slider {
		transform: scale(0.9);
	}

	.switch:hover {
		border-color: var(--cyan-dark);
	}
</style>
