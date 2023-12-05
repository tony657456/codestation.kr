<script lang="ts">
	export let title = '';
	export let description = '';
	export let imageUrl = '';
	export let index = '';
</script>

<div
	class="flex w-full flex-col items-center gap-y-3 rounded-2xl bg-neutral-800 py-10 {$$props.class}"
>
	<img src={imageUrl} alt={title} class="aspect-square w-20 shrink-0" />
	<h3 class="text-2xl font-bold text-white max-md:text-3xl">
		{title} <span class="text-gradient-0" />
	</h3>
	<p class="whitespace-pre-line pt-1 text-center text-xs text-neutral-400">{description}</p>
</div>
