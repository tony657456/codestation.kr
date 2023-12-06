<script lang="ts">
	export let title = '';
	export let subtitle = '';
	export let firstdescription = '';
	export let seconddescription = '';
</script>

<div class="flex flex-col gap-y-1 rounded-2xl bg-neutral-800 px-7 py-8 {$$props.class} text-white">
	<p class="max-md:text-md">
		{title} <span class="text-gradient-0" />
	</p>
	<p class="max-md:text-md text-2xl font-semibold">
		{subtitle} <span class="text-gradient-0" />
	</p>
	<div class="pt-1">
		<p class="max-md:text-md">
			{firstdescription} <span class="text-gradient-0" />
		</p>
		<p class="max-md:text-md">
			{seconddescription} <span class="text-gradient-0" />
		</p>
	</div>
</div>
