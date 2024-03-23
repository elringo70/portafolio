<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Icon from '@iconify/svelte';

	const workData = [
		{
			project: 'Terapie',
			images: [
				{ path: './thumb1.webp' },
				{ path: './thumb2.webp' },
				{ path: './thumb3.webp' },
				{ path: './thumb4.webp' }
			]
		},
		{
			project: 'Fucoidan',
			images: [
				{ path: './thumb1.webp' },
				{ path: './thumb2.webp' },
				{ path: './thumb3.webp' },
				{ path: './thumb4.webp' }
			]
		}
	];

	const options = {
		gap: 10,
		arrows: false
	};
</script>

<Splide {options} aria-label="Trabajos" class="h-[280px] sm:h-[480px]">
	{#each workData as data}
		<SplideSlide>
			<div class="grid grid-cols-2 grid-row-2 gap-4 cursor-pointer">
				{#each data.images as image}
					<div class="relative rounded-lg overflow-hidden flex items-center justify-center group">
						<div class="flex items-center justify-center relative overflow-hidden group">
							<img src={image.path} alt="" width="500px" height="300px" />
							<div
								class="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
							></div>
							<div
								class="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300"
							>
								<div class="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
									<div class="delay-100">{data.project}</div>
									<div
										class="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150"
									>
										title part 2
									</div>
									<div>
										<Icon
											icon="mingcute:arrow-right-up-line"
											class="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</SplideSlide>
	{/each}
</Splide>
