<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import Countup from 'svelte-countup';

	import Avatar from '$lib/components/Avatar.svelte';
	import Circles from '$lib/components/Circles.svelte';

	import { fadeIn } from '$lib/utils/variants';

	let index: number = 0;

	const aboutData = [
		{
			title: 'Tecnologías',
			info: [
				{
					title: 'Desarrollo Web',
					icons: [
						'devicon-html5-plain',
						'devicon-css3-plain',
						'devicon-javascript-plain',
						'devicon-svelte-plain'
					]
				},
				{
					title: 'Backend & Base de Datos',
					icons: [
						'devicon-mongodb-plain',
						'devicon-mysql-plain',
						'devicon-express-original',
						'devicon-nestjs-plain',
						'devicon-nodejs-plain'
					]
				},
				{ title: 'Multiplataforma', icons: ['devicon-flutter-plain'] }
			]
		},
		/* {
			title: 'Reconocimientos',
			info: [
				{
					title: 'Webby Awards - Honoree',
					stage: '2011 - 2012'
				},
				{
					title: 'Adobe Design Achievement Awards - Finalist',
					stage: '2009 - 2010'
				}
			]
		}, */
		{
			title: 'Experiencia',
			info: [
				{
					title: 'Web Developer (Anuglar) - Renato Ramos (Freelancer)',
					stage: '2023 - 2024'
				}
			]
		},
		{
			title: 'Estudios',
			info: [
				{
					title: 'Ing. Desarrollo de Software - UnADM',
					stage: '2022'
				}
			]
		}
	];
</script>

<div class="h-full bg-primary/30 py-[calc(6rem+2vh)] text-center xl:text-left full-container">
	<Circles />

	<Motion variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" let:motion>
		<div class="hidden xl:flex absolute bottom-0 -left-[370px]" use:motion>
			<Avatar />
		</div>
	</Motion>
	<div
		class="container mx-auto h-full flex flex-col items-center xl:flex-row xl:items-start gap-x-6"
	>
		<div class="flex-1 flex flex-col justify-center phrase-container z-10">
			<Motion
				variants={fadeIn('right', 0.2)}
				initial="hidden"
				animate="show"
				exit="hidden"
				let:motion
			>
				<h2 use:motion class="sm:text-[calc(1.125rem+0.5vh)] text-balance md:text-3xl xl:mb-8">
					Cuentanos tu <span class="text-accent">proyecto</span> y te realizaremos el mejor diseño.
				</h2>
			</Motion>

			<Motion
				variants={fadeIn('right', 0.5)}
				initial="hidden"
				animate="show"
				exit="hidden"
				let:motion
			>
				<p
					use:motion
					class="text-balance max-w-[500px] mx-auto xl:mx-0 mb-4 xl:mb-12 px-2 xl:px-0 text-xs"
				>
					Nos especializamos en crear un el proyecto a tu medida y con las herramientas necesarias
					par que puedas crecer en el momento adecuado ajustandanos a las necesidades de cada
					cliente. Cada proyecto se diseña de manera única para que nuestros clientes puedan
					aprovechar se idea al máximo.
				</p>
			</Motion>
			<div class="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
				<div class="flex flex-1 xl:gap-x-6">
					<div
						class="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
					>
						<div class="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
							<Countup initial={0} value={4} duration={3000} step={1} roundto={1} format={true} />
							+
						</div>
						<div class="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
							Años de experiencia
						</div>
					</div>

					<div
						class="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
					>
						<div class="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
							<Countup initial={0} value={20} duration={3000} step={1} roundto={1} format={true} />
							+
						</div>
						<div class="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
							Clientes satisfechos
						</div>
					</div>

					<div
						class="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
					>
						<div class="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
							<Countup initial={0} value={50} duration={3000} step={1} roundto={1} format={true} />
							+
						</div>
						<div class="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
							Colaboraciones
						</div>
					</div>
				</div>
			</div>
		</div>

		<Motion variants={fadeIn('left', 0.2)} initial="hidden" animate="show" exit="hidden" let:motion>
			<div use:motion class="flex flex-col w-full xl:max-w-[48%] z-30">
				<div
					class="flex gap-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 flex-wrap justify-center xl:justify-start skills"
				>
					{#each aboutData as data, dataIndex}
						<button
							on:click={() => {
								index = dataIndex;
							}}
							class={`${index === dataIndex ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 after:z-[40] ' : ''}cursor-pointer capitalize xl:text-lg text-xs relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
						>
							{data.title}
						</button>
					{/each}
				</div>
				<div class="p-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 md:items-center xl:items-start">
					{#each aboutData[index].info as data}
						<div class="flex flex-col md:flex-row gap-x-5 technologies items-center">
							<div class="font-light mb-2 md:mb-0 text-xs technologies-title text-white/60">
								{data.title}
							</div>
							<div class="hidden md:flex">-</div>
							{#if data.hasOwnProperty('stage')}
								<div class="hidden md:flex">{data.stage}</div>
							{/if}
							{#if data.hasOwnProperty('icons')}
								<div class="flex gap-x-4 justify-center">
									{#each data.icons as icon}
										<i class="{icon} text-white xl:text-2xl"></i>
									{/each}
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</Motion>
	</div>
</div>

<style>
	@media (min-height: 600px) {
		.phrase-container h2 {
			@apply text-xl;
		}

		.phrase-container p {
			@apply text-sm;
		}

		.skills button {
			@apply text-sm;
		}

		.technologies .technologies-title {
			@apply text-lg;
		}
	}

	@media (min-height: 750px) {
		.full-container {
			@apply py-[calc(8rem+5vh)];
		}

		.phrase-container h2 {
			@apply text-2xl;
		}

		.skills button {
			@apply text-lg;
		}

		.technologies .technologies-title {
			@apply text-xl;
		}
	}

	@media (min-height: 900px) {
		.phrase-container h2 {
			@apply mb-10;
		}

		.phrase-container p {
			@apply mb-10 text-lg;
		}

		.skills button {
			@apply text-2xl;
		}
	}

	@media (min-width: 1024px) {
		.phrase-container h2 {
			@apply text-4xl;
		}

		.phrase-container p {
			@apply text-base;
		}
	}
</style>
