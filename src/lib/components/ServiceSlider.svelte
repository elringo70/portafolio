<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import { Navigation, Pagination } from 'swiper/modules';
	import Swiper from 'swiper';

	register();

	let swiperEl: HTMLElement,
		swiperObj = null;

	const serviceData = [
		{
			icon: 'mdi:code',
			title: 'Desarrollo web',
			description:
				'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
		},
		{
			icon: 'teenyicons:mobile-outline',
			title: 'Multiplataforma',
			description:
				'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
		},
		{
			icon: 'mdi:api',
			title: 'Api',
			description:
				'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
		}
	];

	onMount(() => {
		new Swiper(swiperEl, {
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 15
				},
				640: {
					slidesPerView: 3,
					spaceBetween: 15
				}
			},
			modules: [Navigation, Pagination]
		});
	});
</script>

<swiper-container bind:this={swiperEl}>
	{#each serviceData as data}
		<swiper-slide>
			<div>{data.title}</div>
			<div>{data.description}</div>
		</swiper-slide>
	{/each}
</swiper-container>
