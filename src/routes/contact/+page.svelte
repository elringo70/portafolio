<script>
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import Icon from '@iconify/svelte';

	import Circles from '$lib/components/Circles.svelte';

	import { fadeIn } from '$lib/utils/variants';
</script>

<div class="h-full bg-primary/30">
	<div
		class="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full"
	>
		<div class="flex flex-col w-full max-w-[700px]">
			<Motion variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" let:motion>
				<h2 class="text-4xl text-center mb-4" use:motion>Contactame</h2>
			</Motion>

			<Motion variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" let:motion>
				<form
					action=""
					method="post"
					class="flex-1 flex flex-col gap-4 w-full mx-auto z-30"
					use:motion
				>
					<div class="flex gap-x-6 w-full">
						<input type="text" placeholder="nombre" class="input" />
						<input type="email" placeholder="email" class="input" />
					</div>
					<input type="email" placeholder="asunto" class="input" />
					<input type="email" placeholder="email" class="input" />
					<textarea placeholder="mensaje" class="textarea"></textarea>
					<button
						class="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
						type="submit"
						><span
							class="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500"
							>Contactar
						</span><Icon
							icon="mingcute:arrow-right-up-line"
							class="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
						/></button
					>
				</form>
			</Motion>
		</div>
	</div>
	<Circles />
</div>

<style>
	.btn,
	.input {
		@apply h-[50px];
	}
	.input {
		@apply w-full h-[48px] rounded-lg pl-6 capitalize;
	}
	.input,
	.textarea {
		@apply bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light;
	}
	.textarea {
		@apply w-full h-[120px] p-6 capitalize rounded-lg resize-none;
	}
</style>
