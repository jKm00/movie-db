<script lang="ts">
	import MovieCard from './MovieCard.svelte';
	import Pagination from './Pagination.svelte';
	import type { Movie } from '../types/Movie';

	export let movies: Movie[];
	export let page: number;
	export let totalPages: number;
</script>

<section class="movie-list">
	{#each movies as movie}
		<MovieCard {movie} />
	{/each}
</section>
<div class="pagination--wrapper">
	<Pagination on:changePage currentPage={page} {totalPages} />
</div>

<style land="scss">
	.movie-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
		column-gap: 1rem;
		row-gap: 2rem;
	}

	.pagination--wrapper {
		display: flex;
		justify-content: end;
	}
</style>
