<script>
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	export const navData = [
		{ name: 'home', path: '/', icon: 'mdi:home' },
		{ name: 'about', path: '/about', icon: 'mdi:user' },
		{ name: 'services', path: '/services', icon: 'heroicons:rectangle-group-16-solid' },
		{ name: 'work', path: '/work', icon: 'material-symbols:work' },
		{
			name: 'testimonials',
			path: '/testimonials',
			icon: 'basil:chat-solid'
		},
		{
			name: 'contact',
			path: '/contact',
			icon: 'basil:envelope-solid'
		}
	];
</script>

<nav
	class="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
>
	<div
		class="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full"
	>
		{#each navData as link}
			<a
				class="{link.path === $page.url.pathname
					? 'text-accent'
					: ''} relative flex items-center group hover:text-accent transition-all duration-300"
				href={link.path}
			>
				<div class="absolute pr-14 right-0 hidden xl:group-hover:flex">
					<div class="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
						<div class="text-[12px] leading-none font-semibold capitalize">{link.name}</div>
						<div
							class="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
						></div>
					</div>
				</div>
				<div>
					<Icon icon={link.icon} />
				</div>
			</a>
		{/each}
	</div>
</nav>
