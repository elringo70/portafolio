<script>
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import { fadeIn } from '$lib/utils/variants';

	import ProjectsBtn from '$lib/components/ProjectsBtn.svelte';
	import Avatar from '$lib/components/Avatar.svelte';
	import ParticlesContainer from '$lib/components/ParticlesContainer.svelte';
	import MetaTag from '$lib/components/MetaTag.svelte';
</script>

<svelte:head>
	<MetaTag
		title="Agencia de desarrollo de software | Aplicaciones Web, iOS y Android"
		description="LUCAALSA es una empresa que se dedica al desarrollo de software Web y multiplataforma iOS y Android. Desarrollomas tu aplicacion para las plataformas de usuario mas utilizadas."
	/>
</svelte:head>

<div class="bg-primary/60 h-full">
	<div class="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
		<div
			class="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto"
		>
			<Motion
				variants={fadeIn('down', 0.3)}
				initial="hidden"
				animate="show"
				exit="hidden"
				let:motion
			>
				<h1 class="text-2xl lg:text-4xl" use:motion>
					Aplicaciones multiplataforma
					<span class="text-accent"><br />Android, iOS y Web</span>
				</h1>
			</Motion>
			<Motion
				variants={fadeIn('down', 0.3)}
				initial="hidden"
				animate="show"
				exit="hidden"
				let:motion
			>
				<p class="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-12 text-balance" use:motion>
					Convierte tus ideas en aplicaciones multiplataforma con nuestro servicio de desarrollo
					web.
				</p>
			</Motion>

			<Motion variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" let:motion>
				<div class="flex justify-center xl:hidden relative" use:motion>
					<ProjectsBtn />
				</div>
			</Motion>

			<Motion
				variants={fadeIn('down', 0.3)}
				initial="hidden"
				animate="show"
				exit="hidden"
				let:motion
			>
				<div class="hidden xl:flex z-30" use:motion>
					<ProjectsBtn />
				</div>
			</Motion>
		</div>
	</div>

	<div class="w-[1200px] h-full absolute right-0 bottom-0">
		<div
			class="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
		></div>

		<ParticlesContainer />
		<div
			class="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
		>
			<Motion
				variants={fadeIn('up', 0.1)}
				initial="hidden"
				animate="show"
				exit="hidden"
				transition={{ duration: 0.5, ease: 'easeInOut' }}
				let:motion
			>
				<div use:motion>
					<Avatar />
				</div>
			</Motion>
		</div>
	</div>
</div>
