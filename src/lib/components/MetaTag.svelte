<script lang="ts">
	export let title: string;
	export let description: string;
	export let canocical: string;
	export let ogImage: undefined | string = undefined;
	export let ogUrl: undefined | string = undefined;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canocical} />
	<meta name="robots" content="index, follow" />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	{#if ogImage}
		<meta property="og:image" content={ogImage} />
	{/if}
	{#if ogUrl}
		<meta property="og:url" content={ogUrl} />
	{/if}
</svelte:head>
