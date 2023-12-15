<script lang="ts">
	export let imageUrl = '';
	export let imageName = '';
	export let title = '';
	export let colorTitle = '';
	export let description = '';
</script>

<div class="flex flex-col gap-2 {$$props.class}">
	<img src={imageUrl} alt="flow-icon" class="w-12 max-md:w-8" />
	<span class="text-neutral-100 underline decoration-solid max-md:text-sm">{imageName}</span>
	<div class="h-2 max-md:h-1" />
	<div class="font-semibold">
		<span class="text-2xl text-white max-md:text-xl">{title}</span>
		<span class="text-gradient-primary text-2xl font-extrabold max-md:text-xl">{colorTitle}</span>
	</div>
	<span class="whitespace-pre-line text-neutral-200 max-md:text-sm">{description}</span>
</div>
