<script>
	import Information from './steps/Information.svelte';
	import NameStep from './steps/NameStep.svelte';
	export let step = 0;
</script>

{#if step === 0}
	<NameStep />
{:else if step === 1}
	<Information />
{/if}
