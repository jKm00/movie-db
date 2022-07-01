<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faAngleLeft,
		faAngleRight,
		faAnglesLeft,
		faAnglesRight
	} from '@fortawesome/free-solid-svg-icons';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let currentPage: number;
	export let totalPages: number;

	let btnBefore: number[];
	let btnAfter: number[];

	const nextPage = () => {
		if (currentPage < totalPages) {
			changePage(currentPage + 1);
		}
	};

	const lastPage = () => {
		changePage(totalPages);
	};

	const prevPage = () => {
		if (currentPage > 1) {
			changePage(currentPage - 1);
		}
	};

	const firstPage = () => {
		changePage(1);
	};

	const changePage = (page: number) => {
		dispatch('changePage', page);
	};
</script>

<div class="pagination">
	<button on:click={firstPage}><Fa icon={faAnglesLeft} /></button>
	<button on:click={prevPage}><Fa icon={faAngleLeft} /></button>
	{#if btnBefore}
		{#each btnBefore as btn}
			<button>{btn}</button>
		{/each}
	{/if}
	<button>{currentPage}</button>
	{#if btnAfter}
		{#each btnAfter as btn}
			<button>{btn}</button>
		{/each}
	{/if}
	<button on:click={nextPage}><Fa icon={faAngleRight} /></button>
	<button on:click={lastPage}><Fa icon={faAnglesRight} /></button>
	<p>Total pages: {totalPages}</p>
</div>

<style lang="scss">
	.pagination {
		display: flex;
		align-items: center;
	}

	button {
		//outline: 1px solid red;
		padding: 1rem;
	}
</style>
