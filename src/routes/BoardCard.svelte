<script lang="ts">
	export let title = '';
	export let description = '';
	export let imageUrl = '';
	export let a = '/';
</script>

<a href={a} class="flex flex-col gap-y-3 rounded-2xl bg-neutral-800 p-4 {$$props.class}">
	<div class="flex w-12">
		<img src={imageUrl} alt={title} class="aspect-square w-full" />
	</div>
	<h3 class="text-3xl font-bold text-white max-md:text-3xl">
		{title} <span class="text-gradient-0" />
	</h3>
	<p class="pt-1 text-neutral-400 max-md:text-sm">{description}</p>
</a>
