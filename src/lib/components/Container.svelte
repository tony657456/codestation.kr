<script lang="ts">
	export let dark = false;
</script>

<div class="flex w-full max-w-[1440px] justify-center {dark ? 'bg-neutral-900' : 'bg-neutral-50'}">
	<div class="flex w-full"><slot /></div>
</div>
