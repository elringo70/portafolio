<script lang="ts">
	import { particlesInit } from '@tsparticles/svelte';
	import { onMount } from 'svelte';
	import { loadFull } from 'tsparticles';

	let ParticlesComponent;

	onMount(async () => {
		const module = await import('@tsparticles/svelte');

		ParticlesComponent = module.default;
	});

	let onParticlesLoaded = (event: CustomEvent) => {
		const particlesContainer = event.detail.particles;
	};

	void particlesInit(async (engine) => {
		await loadFull(engine);
	});
</script>

<svelte:component
	this={ParticlesComponent}
	id="tsparticles"
	class="w-full h-full absolute translate-z-0"
	style=""
	options={{
		fullScreen: { enable: false },
		background: {
			color: {
				value: ''
			}
		},
		fpsLimit: 30,
		interactivity: {
			events: {
				onClick: {
					enable: false,
					mode: 'push'
				},
				onHover: {
					enable: true,
					mode: 'repulse'
				},
				resize: { enable: true }
			},
			modes: {
				push: {
					quantity: 90
				},
				repulse: {
					distance: 100,
					duration: 0.4
				}
			}
		},
		particles: {
			color: {
				value: '#e68e2e'
			},
			links: {
				color: '#f5d393',
				distance: 150,
				enable: true,
				opacity: 0.5,
				width: 1
			},
			collisions: {
				enable: true
			},
			move: {
				direction: 'none',
				enable: true,
				outModes: {
					default: 'bounce'
				},
				random: false,
				speed: 1,
				straight: false
			},
			number: {
				density: {
					enable: true,
					height: 800,
					width: 800
				},
				value: 50
			},
			opacity: {
				value: 0.5
			},
			shape: {
				type: 'circle'
			},
			size: {
				value: { min: 1, max: 5 }
			}
		},
		detectRetina: true
	}}
	on:particlesLoaded={onParticlesLoaded}
/>
