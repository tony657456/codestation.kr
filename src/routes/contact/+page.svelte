<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Progressbar from '$lib/components/Progressbar.svelte';
	import ContactForm from './ContactForm.svelte';
	let step = 0;
	const lastStep = 5;
	$: percent = (step / lastStep) * 100;
</script>

<Progressbar bind:percent />
<Container class="flex items-center justify-center">
	<ContactForm bind:step />
</Container>
