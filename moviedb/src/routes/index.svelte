<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=3aa0cfd4a565f3e7365e916a0dce03ce&language=en-US&page=1`
		);
		const data = await res.json();

		return {
			props: {
				status: res.status,
				response: data
			}
		};
	}
</script>

<script lang="ts">
	import type { ApiResponse } from '../types/ApiResponse';
	import MovieList from '../components/MovieList.svelte';

	const URL =
		'https://api.themoviedb.org/3/movie/top_rated?api_key=3aa0cfd4a565f3e7365e916a0dce03ce&language=en-US';

	export let response: ApiResponse;

	const getMovies = async (page: number) => {
		const res = await fetch(URL + '&page=' + page);
		const data = await res.json();

		response = data;
	};
</script>

<main class="main">
	<h1 class="title">Top Rated Movies</h1>
	<MovieList
		on:changePage={(e) => getMovies(e.detail)}
		movies={response.results}
		page={response.page}
		totalPages={500}
	/>
</main>

<style lang="scss">
	.title {
		text-align: center;
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
</style>
