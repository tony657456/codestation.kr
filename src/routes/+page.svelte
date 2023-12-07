<script lang="ts">
	import GradientBorderContainer from '$lib/components/GradientBorderContainer.svelte';
	import {
		IntroSection,
		WhySection,
		FlowSection,
		DesignSection,
		StackSection,
		DevelopmentSection,
		PricingSection,
	} from './sections';
</script>

<IntroSection />
<WhySection />
<FlowSection />
<DesignSection />
<StackSection />
<DevelopmentSection />
<PricingSection />
<div class="w-fit text-white">
	<GradientBorderContainer padding="3px">
		<div class="p-4">hello</div>
	</GradientBorderContainer>
</div>
