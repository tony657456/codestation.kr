<script lang="ts">
	export let imageUrl = '';
	export let imageName = '';
	export let title = '';
	export let colorTitle = '';
	export let description = '';
</script>

<div class="flex flex-col gap-2 py-36 {$$props.class}">
	<img src={imageUrl} alt="flow-icon" class="w-12" />
	<span class="text-neutral-100 underline decoration-solid">{imageName}</span>
	<div class="h-2" />
	<div class="font-semibold">
		<span class="text-2xl text-white">{title}</span>
		<span class="text-gradient-primary text-2xl font-extrabold">{colorTitle}</span>
	</div>
	<span class="whitespace-pre-line text-neutral-200">{description}</span>
</div>
