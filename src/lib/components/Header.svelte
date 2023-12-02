<script lang="ts">
	import Container from './Container.svelte';

	let scrollY = 0;
</script>

<svelte:window bind:scrollY />
<!-- <header
class="fixed flex w-[1440px] justify-center {scrollY > 100
	? 'bg-black'
	: 'bg-neutral-10'} z-50 transition-all duration-1000" -->
<Container>
	<header
		class="fixed z-50 flex w-full
			 justify-center transition-all duration-1000"
	>
		<div class="flex w-full py-8 pl-36 max-md:justify-center max-md:py-6 max-md:pl-0">
			<a href="/" class="w-[254px] max-md:w-[180px]">
				<img src="logo_name.png" alt="codestation_logo" class="w-full max-md:w-full" />
			</a>
		</div>
	</header>
</Container>
