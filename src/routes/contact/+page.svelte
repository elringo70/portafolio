<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import Icon from '@iconify/svelte';

	import Circles from '$lib/components/Circles.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import MetaTag from '$lib/components/MetaTag.svelte';
	import WaButton from '$lib/components/WAButton.svelte';

	import { fadeIn } from '$lib/utils/variants';
	import { onMount } from 'svelte';

	let form: HTMLFormElement;
	let showModal: boolean;

	const toggleModal = () => {
		showModal = !showModal;
	};

	onMount(() => {
		form.addEventListener('submit', handleSubmit);

		async function handleSubmit(event: Event): Promise<void> {
			event.preventDefault();

			const formData = new FormData(this);

			const response = await fetch(this.action, {
				method: this.method,
				body: formData,
				headers: {
					Accept: 'application/json'
				}
			});

			if (response.ok) {
				form.reset();
				toggleModal();
			}
		}
	});
</script>

<svelte:head>
	<MetaTag
		title="Agencia de desarrollo de software | Contactanos"
		description="Contacta a nuestra empresa, cuentanos tu idea y la desarrollaremos a las necesidades del mismo."
	/>
</svelte:head>

<div class="h-full bg-primary/30">
	<div
		class="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full"
	>
		<div class="flex flex-col w-full max-w-[700px]">
			<Motion variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden" let:motion>
				<h2 class="text-4xl text-center mb-4" use:motion>Contáctame</h2>
			</Motion>

			<Motion variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden" let:motion>
				<form
					class="flex-1 flex flex-col gap-4 w-full mx-auto z-30"
					action="https://formspree.io/f/xrgnberv"
					method="POST"
					autocomplete="off"
					bind:this={form}
					use:motion
				>
					<div class="flex flex-col xs:flex-row gap-x-6 gap-y-4 xs:gap-y-0 w-full">
						<input name="name" type="text" placeholder="nombre" class="input" required />
						<input name="email" type="email" placeholder="email" class="input" required />
					</div>
					<input name="subject" type="text" placeholder="asunto" class="input" required />
					<textarea name="message" placeholder="mensaje" class="textarea" required></textarea>
					<button
						class="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative mx-auto xs:mx-0"
						type="submit"
						><span
							class="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500"
							>Contactar
						</span><Icon
							icon="mingcute:arrow-right-up-line"
							class="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] h-full w-full"
						/></button
					>
				</form>
			</Motion>
		</div>
	</div>
	<Circles />
	<Modal {showModal} />
</div>
<WaButton />
