<script lang="ts">
	export let title = '';
	export let description = '';
	export let index = '';
	export let subtitle = '';
	export let firstdescription = '';
	export let seconddescription = '';
</script>

<a
	href="/{index}"
	class="flex flex-col gap-y-3 rounded-2xl bg-neutral-800 px-8 py-12 {$$props.class}"
>
	<p class="text-white max-md:text-3xl">
		{title} <span class="text-gradient-0" />
	</p>
	<p class="text-2xl font-semibold text-white max-md:text-3xl">
		{subtitle} <span class="text-gradient-0" />
	</p>
	<p class=" text-white max-md:text-3xl">
		{firstdescription} <span class="text-gradient-0" />
	</p>
	<p class=" text-white max-md:text-3xl">
		{seconddescription} <span class="text-gradient-0" />
	</p>
	<p class="pt-1 text-neutral-400 max-md:text-sm">{description}</p>
</a>
