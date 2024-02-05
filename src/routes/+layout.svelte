<script lang="ts">
	import type { PageData } from './$types';

	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Header from '$lib/components/Header.svelte';
	import TopLeftImage from '$lib/components/TopLeftImage.svelte';

	import Navigation from '$lib/components/Navigation.svelte';

	export let data: PageData;
</script>

<div class="page bg-site text-white bg-cover bg-no-repeat sora relative">
	<TopLeftImage />
	<Nav />
	<Header />
	<Navigation pathname={data.pathname}>
		<slot />
	</Navigation>
</div>
