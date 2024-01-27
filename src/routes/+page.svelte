<script>
	import ParticlesContaines from '$lib/components/ParticlesContainer.svelte';
	import ProjectsBtn from '$lib/components/ProjectsBtn.svelte';
	import Avatar from '$lib/components/Avatar.svelte';
</script>

<div class="bg-primary/60 h-full">
	<div class="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
		<div
			class="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto"
		>
			<div class="h1">
				<h1>Transforming ideas <br /> Into <span class="text-accent">Digital Reality</span></h1>
			</div>
			<p class="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic fugit exercitationem nobis
				reprehenderit nihil quisquam rerum excepturi velit provident optio?
			</p>
			<div class="flex justify-center xl:hidden relative">
				<ProjectsBtn />
			</div>
		</div>
	</div>
	<div>image</div>
</div>
