<script lang="ts">
	export let title = '';
	export let index = '';
	export let subtitle = '';
	export let firstdescription = '';
	export let seconddescription = '';
</script>

<a
	href="/{index}"
	class="flex flex-col gap-y-1 rounded-2xl bg-neutral-800 px-7 py-8 {$$props.class} text-white"
>
	<p class="max-md:text-3xl">
		{title} <span class="text-gradient-0" />
	</p>
	<p class="text-2xl font-semibold max-md:text-3xl">
		{subtitle} <span class="text-gradient-0" />
	</p>
	<div class="pt-1">
		<p class="max-md:text-3xl">
			{firstdescription} <span class="text-gradient-0" />
		</p>
		<p class="max-md:text-3xl">
			{seconddescription} <span class="text-gradient-0" />
		</p>
	</div>
</a>
