<script>
	import '../global.css';
</script>

<nav class="nav">
	<div class="nav__section">
		<a class="nav__link" href="/"><h1 class="logo">Movie DB</h1></a>
		<ul class="nav__list list">
			<li><a class="nav__link" href="/">Home</a></li>
			<li><a class="nav__link" href="/popular">Popular</a></li>
		</ul>
	</div>
	<ul class="nav__section list">
		<li><a class="nav__link" href="/login">Login</a></li>
		<li><a class="nav__link" href="/signup">Sign up</a></li>
	</ul>
</nav>

<slot />

<style lang="scss">
	.list {
		display: flex;
		gap: 1rem;
		list-style-type: none;
	}

	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;

		&__section {
			display: flex;
			align-items: center;
			gap: 1rem;
		}

		&__link {
			text-decoration: none;
			color: #1d1d1d;
		}

		&__link:hover,
		&__link:focus {
			text-decoration: underline;
		}
	}
</style>
