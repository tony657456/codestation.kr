<script lang="ts">
	export let imageUrl = '';
	export let imageName = '';
	export let title = '';
	export let colorTitle = '';
	export let description = '';
</script>

<div class="flex w-80 flex-col gap-2 py-36">
	<img src={imageUrl} alt="flow_icon" class="w-12" />
	<span class="py-2 text-white underline decoration-solid">{imageName}</span>
	<div>
		<span class="text-2xl text-white">{title}</span>
		<span class="text-2xl text-cyan-500">{colorTitle}</span>
	</div>
	<span class="text-white">{description}</span>
</div>
