<script>
	import { page } from '$app/stores';
	import { AnimatePresence, Motion } from 'svelte-motion';

	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Header from '$lib/components/Header.svelte';
	import TopLeftImage from '$lib/components/TopLeftImage.svelte';
	import Transition from '$lib/components/Transition.svelte';
</script>

<div class="page bg-site text-white bg-cover bg-no-repeat sora relative">
	<TopLeftImage />
	<Nav />
	<Header />
	<AnimatePresence list={[{ key: $page.url.pathname }]}>
		<Motion let:motion>
			<div use:motion class="h-full">
				<Transition />
				<slot />
			</div>
		</Motion>
	</AnimatePresence>
</div>
