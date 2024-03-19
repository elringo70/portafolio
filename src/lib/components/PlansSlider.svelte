<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Icon from '@iconify/svelte';

	const plansData = [
		{
			plan: 'Landing Page',
			price: '$ 2,500',
			description: ['1', '2', '3']
		},
		{
			plan: 'Single Page Application',
			price: '$ 3,500',
			description: ['1', '2', '3']
		},
		{
			plan: 'eCommerce',
			price: '$ 8,000',
			description: ['1', '2', '3']
		},
		{
			plan: 'A medida',
			price: 'Solicita cotización',
			description: ['1', '2', '3']
		}
	];

	const options = {
		gap: 10,
		pagination: false
	};
</script>

<Splide {options} aria-label="Planes" class="min-h-[400px]">
	{#each plansData as plan}
		<SplideSlide>
			<div
				class="min-w-52 w-72 min-h-[400px] bg-transparent backdrop-blur-md border border-gray-600 rounded-md p-5 shadow-md hover:shadow-xl transition-all z-10 hover:scale-105"
			>
				<div class="text-accent text-lg text-center">{plan.plan}</div>
				<div>{plan.price}</div>
				<div>
					<ul>
						{#each plan.description as feature}
							<li><p class="text-xs">{feature}</p></li>
						{/each}
					</ul>
				</div>
			</div>
		</SplideSlide>
	{/each}
</Splide>
