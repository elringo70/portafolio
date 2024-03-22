<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Icon from '@iconify/svelte';

	const plansData = [
		{
			plan: 'Landing Page',
			price: '2,500',
			description: [
				'Dominio incluido',
				'SSL incluido',
				'Hosting por 1 año',
				'Cuentas de correo incluidas',
				'Optimización de imágenes',
				'Capacitación de uso',
				'Formulario de contacto',
				'Plugin de contacto mediante Whatsapp',
				'Ancho de banda ilimitado',
				'100GB de SSD',
				'Rendimiento standard',
				'Modo responsivo incluido',
				'Optimización SEO'
			]
		},
		{
			plan: 'Single Page Application',
			price: '3,500',
			description: [
				'Incluye características de Landing Page',
				'5 secciones',
				'Mayor rendimiento',
				'Copias de seguridad diarias',
				'Protección DDOS',
				'Formulario de contacto',
				'Chat de Whatsapp'
			]
		},
		{
			plan: 'eCommerce',
			price: '8,000',
			description: [
				'Incluye características de Landing Page',
				'Incluye características de SPA',
				'Alta de productos',
				'Adaptación de pasarela de pagos',
				'Asesoría de métodos de envío',
				'Opción para convertir en catalogo',
				'Página autoadministrable',
				'Hasta 6 secciones'
			]
		},
		{
			plan: 'A medida',
			price: 'Solicita cotización',
			description: [
				'API, REST y RESTFul',
				'Consumo de API´s',
				'Bases de Datos',
				'Panel Dashboard',
				'App´s Multiplataforma',
				'Despliegue de aplicación'
			]
		}
	];

	const options = {
		perPage: 3,
		gap: 15,
		arrows: true,
		pagination: true,
		breakpoints: {
			1024: {
				perPage: 2
			},
			768: {
				perPage: 1,
				gap: 5
			}
		}
	};
</script>

<Splide {options} aria-label="Planes">
	{#each plansData as plan}
		<SplideSlide>
			<div
				class="min-w-56 w-72 min-h-[400px] xs:bg-transparent backdrop-blur-md bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] border border-gray-600 rounded-md p-5 shadow-md hover:shadow-xl transition-all mx-auto"
			>
				<div class="text-accent text-xl text-center pb-4 font-medium">{plan.plan}</div>
				<div class="flex items-center gap-x-2 pb-1">
					<span class="text-accent">
						<Icon icon="heroicons-outline:currency-dollar" />
					</span>
					{plan.price}
				</div>
				<div>
					<ul>
						{#each plan.description as feature}
							<li class="flex items-center even:py-1">
								<Icon icon="bi:check" />
								<p class="text-xs">{feature}</p>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</SplideSlide>
	{/each}
</Splide>
