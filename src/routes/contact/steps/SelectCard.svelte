<script lang="ts">
	export let number = '';
	export let subtitle = '';
	export let value = '';
</script>

<div class="rounded-2xl border border-sky-400">
	<div class="flex items-center justify-start px-2 py-1">
		<div class="rounded-full border border-sky-300 px-2 text-sm text-sky-300">{number}</div>
		<span class="mx-2 text-lg text-sky-300">{subtitle}</span>
		<input bind:value name={subtitle} />
	</div>
</div>
