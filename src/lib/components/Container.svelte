<script lang="ts">
	export let dark = false;
</script>

<div class="flex w-full justify-center {dark ? 'bg-neutral-900' : 'bg-neutral-50'}">
	<div class="flex w-full max-w-5xl flex-col py-8"><slot /></div>
</div>
