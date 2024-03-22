<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	import MetaTag from '$lib/components/MetaTag.svelte';
	import WaButton from '$lib/components/WAButton.svelte';

	import { fadeIn } from '$lib/utils/variants.js';
	import Bulb from '$lib/components/Bulb.svelte';
	import PlansSlider from '$lib/components/PlansSlider.svelte';
</script>

<svelte:head>
	<MetaTag
		title="Agencia de desarrollo de software | Contactanos"
		description="Contacta a nuestra empresa, cuentanos tu idea y la desarrollaremos a las necesidades del mismo."
	/>
</svelte:head>

<div class="h-full bg-primary/30 flex items-center">
	<div class="container mx-auto">
		<div
			class="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
		></div>
		<Bulb />
		<Motion variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit="hidden" let:motion>
			<div class="w-full" use:motion>
				<PlansSlider />
				<div class="py-5">* Precios en pesos mexicanos(MXN)</div>
			</div>
		</Motion>
	</div>
</div>
