<script lang="ts">
	export let padding = '2px';
</script>

<div class="hidden p-[2px]" />
<div class="hidden p-[3px]" />
<div class="gradient-primary rounded-full p-[{padding}]">
	<div class="w-full rounded-full bg-black">
		<slot />
	</div>
</div>
