<script lang="ts">
	import { inview } from 'svelte-inview';

	export let isInView: boolean;

	function handleChange(e: any) {
		isInView = e.detail.inView;
	}
</script>

<div class="hidden delay-75" />
<div class="hidden delay-150" />
<div class="hidden delay-200" />
<div class="hidden delay-300" />
<div class="hidden delay-500" />
<div class="hidden delay-700" />
<div class="hidden delay-1000" />
<div class="hidden delay-[1200ms]" />
<div class="animate-right-primary hidden" />
<div class="animate-right-secondary hidden" />
<div class="animate-right-third hidden" />
<div class="hidden bg-red-500" />
<div class="hidden bg-neutral-500" />
<div
	use:inview={{
		unobserveOnEnter: true,
		rootMargin: '-20%',
	}}
	on:change={handleChange}
	class={$$props.class}
>
	<slot />
</div>
