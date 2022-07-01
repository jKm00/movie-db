<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=3aa0cfd4a565f3e7365e916a0dce03ce&language=en-US`
		);
		const data = await res.json();

		return {
			props: {
				movie: data
			}
		};
	}
</script>

<script lang="ts">
	import type { MovieDetails } from '../../types/Movie';

	export let movie: MovieDetails;

	console.log(movie);
</script>

<section class="movie-page">
	<img
		class="movie-card__img"
		src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
		alt={movie.title}
	/>
	<div class="movie-page__body">
		<h2 class="movie-page__body__title">{movie.title}</h2>
		<p class="movie-page__body__desc">{movie.overview}</p>
		<p class="movie-page__body__stat">
			<span class="movie-page__body__stat__label">Release date</span>{movie.release_date}
		</p>
		<p class="movie-page__body__stat">
			<span class="movie-page__body__stat__label">Rating</span>{movie.vote_average}
		</p>
		<p class="movie-page__body__stat">
			<span class="movie-page__body__stat__label">Number of votes</span>{movie.vote_count}
		</p>
		<p class="movie-page__body__stat">
			<span class="movie-page__body__stat__label">Runtime</span>{movie.runtime}
		</p>
	</div>
</section>
