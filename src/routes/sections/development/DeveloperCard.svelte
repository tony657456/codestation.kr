<script lang="ts">
	export let title = '';
	export let imageUrl = '';
	export let description = '';
</script>

<div class="grid w-full grid-cols-7 gap-3">
	<div class="col-span-3 flex flex-col justify-center gap-3 text-white">
		<p class="text-3xl text-[#E0E7FF]">{title}</p>
		<span class="whitespace-pre-line text-neutral-200">{description}</span>
	</div>
	<div class="col-span-4 flex items-center justify-center">
		<img src={imageUrl} alt="sayImage" class="w-full" />
	</div>
</div>
