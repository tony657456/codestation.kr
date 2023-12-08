<script lang="ts">
	export let title = '';
	export let subtitle = '';

	export let descriptions: string[];
</script>

<div class="flex flex-col gap-y-1 rounded-2xl bg-neutral-800 px-7 py-8 {$$props.class} text-white">
	<p class="max-md:text-md">
		{title}
	</p>
	<p class="max-md:text-md text-2xl font-semibold">
		{subtitle}
	</p>
	<ol class="pt-1 text-neutral-200">
		{#each descriptions as description}
			<li class="max-md:text-md list-inside list-disc">{description}</li>
		{/each}
	</ol>
</div>
