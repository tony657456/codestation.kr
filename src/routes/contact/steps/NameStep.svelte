<script lang="ts">
	import ContactContainer from '$lib/components/ContactContainer.svelte';
	import Container from '$lib/components/Container.svelte';
	let step = 0;
</script>

<Container class="min-h-screen">
	<ContactContainer bind:step />
</Container>
