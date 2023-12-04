<script lang="ts">
	export let title = '';
	export let imageUrl = '';
	export let description = '';
</script>

<div class="grid w-full grid-cols-2 gap-3">
	<div class="flex w-80 flex-col justify-center gap-3 text-white">
		<p class="text-3xl text-[#E0E7FF]">{title}</p>
		<span class="text-neutral-200">{description}</span>
	</div>
	<div class="flex items-center">
		<img src={imageUrl} alt="sayImage" class="w-full" />
	</div>
</div>
