<script lang="ts">
	import Container from '$lib/components/Container.svelte';

	let status = 'default';

	function handleClick() {
		if (status === 'default') status = 'clicked';
		else status = 'default';
	}
</script>

<Container class="min-h-screen">
	<div
		class="flex h-full w-full flex-col justify-center bg-white transition-all {status === 'default'
			? 'items-center'
			: 'items-end'}"
	>
		<span class="text" style={status === 'default' ? 'font-size: 10px;' : 'font-size:20px;'}>
			NAMMINWOO
		</span>
		<button class="btn" on:click={handleClick}> hello </button>
	</div>
</Container>

<style>
	.text {
		transition: all 0.5s ease-in-out;
	}

	.btn {
		background-color: #000;
		border-radius: 0.25rem;
		color: #fff;
		height: fit-content;
	}
</style>
