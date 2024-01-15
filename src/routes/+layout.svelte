<script lang="ts">
	import { navigating, page } from '$app/stores';
	import ContactModal from '$lib/components/ContactModal.svelte';
	import FloatingButton from '$lib/components/FloatingButton.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import { isLoading } from '$lib/stores/loading-store';
	import '../app.css';
	import Footer from '../lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
</script>

{#if $navigating || $isLoading}
	<Loading />
{/if}

<Seo />
<Header />
<ContactModal />
{#key $page.url.pathname}
	<slot />
{/key}
<FloatingButton />
<Footer />
