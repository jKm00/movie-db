<script lang="ts">
	import type { Movie } from '../types/Movie';

	export let movie: Movie;
</script>

<div class="movie-card">
	<a href={'/movie/' + movie.id}>
		<img
			class="movie-card__img"
			src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
			alt={movie.title}
		/>
	</a>
	<div class="movie-card__body">
		<h2 class="movie-card__body__title">{movie.title}</h2>
		<p class="movie-card__body__desc">{movie.release_date}</p>
	</div>
</div>

<style lang="scss">
	.movie-card {
		&__img {
			width: 100%;
			height: 30vh;
			object-fit: cover;
			border-radius: 0.5rem;
		}

		&__body {
			padding: 1rem 0;

			&__title {
				font-size: 1rem;
			}

			&__desc {
				font-size: 0.8rem;
			}
		}
	}
</style>
