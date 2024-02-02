<script>
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	import ServiceSlider from '$lib/components/ServiceSlider.svelte';
	import Bulb from '$lib/components/Bulb.svelte';
	import Circles from '$lib/components/Circles.svelte';

	import { fadeIn } from '$lib/utils/variants';
</script>

<div class="h-full bg-primary/30 py-36 flex items-center">
	<Circles />
	<div class="container mx-auto">
		<div class="flex flex-col xl:flex-row gap-x-8">
			<div class="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
				<h2 class="text-3xl xl:mt-8">Servicios <span class="text-accent">.</span></h2>
				<p class="mb-4 max-w-[400px] max-auto lg:mx-0">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eaque sapiente obcaecati
					accusantium aliquam reprehenderit quod dolores animi a placeat.
				</p>
			</div>
			<div class="w-full xl:max-w-[65%]">
				<ServiceSlider />
			</div>
		</div>
	</div>
	<Bulb />
</div>
