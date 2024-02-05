<script>
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	import TestimonialSlider from '$lib/components/TestimonialSlider.svelte';
	import Bulb from '$lib/components/Bulb.svelte';
	import Circles from '$lib/components/Circles.svelte';

	import { fadeIn } from '$lib/utils/variants';
</script>

<div
	class="h-full bg-primary/30 pt-32 flex flex-col items-center justify-center text-center testimonial-container"
>
	<Circles />
	<div class="container mx-auto h-full flex flex-col justify-center testimonials">
		<Motion variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit="hidden" let:motion>
			<h2 class="text-2xl mb-4" use:motion>
				Lo que nuestros clientes <span class="text-accent">comentan</span>
			</h2>
		</Motion>

		<Motion variants={fadeIn('up', 0.6)} initial="hidden" animate="show" exit="hidden" let:motion>
			<div class="z-30" use:motion>
				<TestimonialSlider />
			</div>
		</Motion>
	</div>
	<Bulb />
</div>

<style>
	@media (min-height: 600px) {
		.testimonial-container {
			@apply pt-20;
		}

		.testimonials h2 {
			@apply text-3xl;
		}
	}

	@media (min-height: 750px) {
		.testimonials h2 {
			@apply text-4xl;
		}
	}
</style>
