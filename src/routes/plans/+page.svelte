<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import Icon from '@iconify/svelte';

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

<div class="bg-primary/60 h-full">
	<div class="w-full h-full absolute right-0 bottom-0">
		<div
			class="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
		></div>
		<Bulb />
		<PlansSlider />
	</div>
</div>
