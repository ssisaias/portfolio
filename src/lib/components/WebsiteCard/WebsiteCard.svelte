<script lang="ts">
    import { ArrowSquareOut, GitFork } from 'phosphor-svelte';
	import type { CardItem } from '../../../types/apptypes';
    
  
    export let cardItem: CardItem;
  </script>
  
  <div class="website-card">
    <div class="website-card__header">
      <h4>{cardItem.name}</h4>
    </div>
  
    <div class="website-card__image">
      <img src={cardItem.image} alt={cardItem.name} />
    </div>
  
    <div class="website-card__description">
      <h4>{cardItem.description}</h4>
    </div>
  
    <div class="website-card__footer">
      {#if cardItem.github}
        <a href={cardItem.github} target="_blank">
          <span>Source</span>
          <GitFork size={18} />
        </a>
      {/if}
  
      {#if cardItem.sitelink}
        <a href={cardItem.sitelink} target="_blank">
          <span>Preview</span>
          <ArrowSquareOut size={18} />
        </a>
      {/if}
    </div>
  </div>
  
  <style>
    .website-card {
      background-color: var(--base-card);
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.07);
      transition: transform 0.2s;
      width: 100%;
      max-width: 300px;
    }
  
    .website-card:hover {
      transform: translateY(-4px);
    }
  
    .website-card__header {
      padding: 1rem;
    }
  
    .website-card__header h4 {
      font-size: 1.2rem;
      color: var(--base-subtitle);
    }
  
    .website-card__image {
      background-color: var(--background);
    }
  
    .website-card__image img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
  
    .website-card__description {
      padding: 0.75rem 1rem;
      flex-grow: 1;
    }
  
    .website-card__description h4 {
      font-size: 1rem;
      font-weight: 400;
      color: var(--base-subtitle);
    }
  
    .website-card__footer {
      display: flex;
      gap: 0.5rem;
      justify-content: space-between;
      padding: 0.75rem 1rem;
      flex-wrap: wrap;
    }
  
    .website-card__footer a {
      display: flex;
      align-items: center;
      gap: 6px;
      background-color: var(--background-secondary);
      padding: 0.4rem 0.75rem;
      border-radius: 6px;
      text-decoration: none;
      flex: 1;
      justify-content: center;
      min-width: 120px;
      transition: background-color 0.3s, color 0.3s;
      border: 1px solid transparent;
    }
  
    .website-card__footer a:hover {
      background-color: var(--base-hover);
      color: var(--cyan);
      border: 1px solid var(--cyan);
    }
  </style>
  