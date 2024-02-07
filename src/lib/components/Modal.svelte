<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	export let showModal: boolean = false;

	const toggleModal = () => {
		showModal = !showModal;
	};
</script>

{#if showModal}
	<div id="modal-component-container" class="fixed inset-0 z-50">
		<div
			class="modal-flex-container flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
		>
			<div
				class="modal-bg-container fixed inset-0 bg-primary/90 opacity-75"
				transition:fade={{ duration: 400 }}
			></div>
			<div class="modal-space-container"></div>
			<div
				class="modal-container inline-block align-bottom rounded-md text-left overflow-hidden shadow-lg shadow-white/50 transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full"
				id="modal-container"
				transition:fly={{
					duration: 400,
					y: -300
				}}
			>
				<div class="modal-wrapper bg-white/20 backdrop-blur-sm px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<div class="modal-wrapper-flex sm:flex sm:items-start">
						<div
							class="modal-icon mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-0 sm:w-10"
						></div>
						<div class="modal-content text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left">
							<h3 class="text-2xl font-semibold">Correo enviado</h3>
							<div class="modal-text mt-2">
								<p>Correo enviado. Nos contactaremos lo antes posible.</p>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-actions bg-white/20 backdrop-blur-sm pb-4">
					<button
						class="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto"
						on:click={toggleModal}
					>
						Enterado
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
