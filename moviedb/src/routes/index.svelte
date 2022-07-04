<script context="module" lang="ts">
	/* import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const response = await fetch('./api/random?max=10');
		const data = await response.json();

		if (response.ok) {
			return {
				props: {
					test: data.test
				}
			};
		}

		return {
			props: {
				status: response.status,
				error: 'Could not fetch data'
			}
		};
	}; */
</script>

<script lang="ts">
	let maxValue = 0;
	let randomNumber: number;

	const handleSubmit = async () => {
		const response = await fetch('./api/random?max=' + maxValue);
		const data = await response.json();

		randomNumber = data.random;
	};
</script>

<h1>Hello world</h1>
<form on:submit|preventDefault={handleSubmit}>
	<input type="number" bind:value={maxValue} />
	<button>Generate random number</button>
</form>
{#if randomNumber !== undefined}
	<h2>{randomNumber}</h2>
{/if}
