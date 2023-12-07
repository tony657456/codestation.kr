<script lang="ts">
	export let number = '';
	export let value = '';

	let onClick = false;
	function handleClick() {
		onClick = !onClick;
	}
</script>

<button
	class="rounded-2xl border {onClick ? 'border-sky-400' : 'border-sky-800'}"
	on:click|preventDefault={handleClick}
>
	<div class="flex items-center justify-start px-2 py-1">
		<div
			class="rounded-full border border-sky-300 px-2 text-sm text-sky-300 {onClick
				? 'bg-sky-500'
				: ''}"
		>
			{number}
		</div>
		<span class="mx-2 text-lg text-sky-300 {onClick ? 'font-bold' : ''}">{value}</span>
	</div>
</button>
