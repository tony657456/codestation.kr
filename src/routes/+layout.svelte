<script lang="ts">
	import { page } from '$app/stores';
	import Seo from '$lib/components/SEO.svelte';
	import '../app.css';
	import Footer from '../lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
</script>

<Seo />
<Header />
{#key $page.url.pathname}
	<slot />
{/key}
<Footer />
