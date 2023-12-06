<script lang="ts">
	export let title = '';
	export let description = '';
	export let imageUrl = '';
</script>

<div class="flex flex-col gap-y-2 rounded-2xl bg-neutral-800 p-4 {$$props.class}">
	<div class="flex w-10">
		<img src={imageUrl} alt={title} class="aspect-square w-full" />
	</div>
	<h3 class="text-2xl font-bold text-white max-md:text-xl">
		{title} <span class="text-gradient-0" />
	</h3>
	<p class=" text-neutral-400 max-md:text-sm">{description}</p>
</div>
