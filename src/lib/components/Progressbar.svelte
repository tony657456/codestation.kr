<script lang="ts">
	export let percent = 0;
</script>

<div class="h-1 w-full overflow-hidden rounded-full bg-white">
	<div
		class="progressbar-color-primary h-full rounded-full"
		style="width: {percent}%; transition: width 0.5s ease-in-out"
	/>
</div>
