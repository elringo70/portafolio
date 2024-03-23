<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Icon from '@iconify/svelte';

	const testimonialData = [
		{
			name: 'David Solis',
			image: './t-avt-1.webp',
			position: 'Podólogo',
			message:
				'Mi negocio de podología necesitaba una página de internet para que me encuentren en Google, sepan mis horarios y encuentren nuestras sucursales. Aquí nos ayudaron perfectamente.'
		},
		{
			name: 'Ericka Toscano',
			image: './t-avt-2.webp',
			position: 'Terapeuta',
			message:
				'Excelente servicio... pedí una página para vender mis productos terapéuticos y la tuvo inmediatamente y en tiempo. Funciona perfectamente y es muy fácil de usar'
		},
		{
			name: 'Jessica Yadira',
			image: './t-avt-3.webp',
			position: 'Licenciada',
			message:
				'Para el control y administración de mi trabajo, necesitába una aplicación para llevar un mejor control de estadísticas. La empresa LUCAALSA me ayudó a implementar una solución a la medida.'
		}
	];

	const options = {
		gap: 10,
		pagination: false
	};
</script>

<Splide {options} aria-label="Trabajos" class="h-[400px]">
	{#each testimonialData as data}
		<SplideSlide>
			<div class="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
				<div
					class="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0"
				>
					<div class="flex flex-col justify-center text-center">
						<div class="mb-2 mx-auto w-[80px] h-[80px] avatar-image">
							<img class="w-full h-full" src={data.image} alt="" />
						</div>
						<div class="text-lg avatar-name">{data.name}</div>
						<div class="text-[12px] uppercase font-extralight tracking-widest avatar-position">
							{data.position}
						</div>
					</div>
				</div>
				<div
					class="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20"
				>
					<div class="mb-4">
						<Icon
							icon="icomoon-free:quotes-left"
							class="text-2xl md:text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
						/>
					</div>
					<div class="text-xs xl:text-lg text-center md:text-left message text-balance">
						{data.message}
					</div>
				</div>
			</div>
		</SplideSlide>
	{/each}
</Splide>

<style>
	@media (min-height: 600px) {
		.message {
			@apply text-base;
		}
	}

	@media (min-height: 750px) {
		.message {
			@apply text-lg;
		}

		.avatar-name {
			@apply text-xl;
		}
	}

	@media (min-height: 900px) {
		.avatar-image {
			@apply w-[120px] h-[120px];
		}

		.avatar-name {
			@apply text-2xl;
		}

		.avatar-position {
			@apply text-lg;
		}
	}
</style>
