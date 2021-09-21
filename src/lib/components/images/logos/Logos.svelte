<script>
	import Separator from '$lib/components/Separator.svelte';

	import Logo from './Logo.svelte';

	const logos = [
		{
			src: '/images/logos/gob.png',
			alt: 'Gobierno de México'
		},
		{
			src: '/images/logos/agricultura.png',
			alt: 'Secretaría de Agricultura y Desarrollo Rural'
		},
		{
			src: '/images/logos/senasica.png',
			alt: 'Servicio Nacioal de Sanidad, Inocuidad y Calidad Agroalimentaria'
		}
	];
</script>

<div>
	{#each logos as logo}
		<Separator />
		<Logo {...logo} />
	{/each}
</div>

<style>
	div {
		background-color: white;
		display: inline-flex;
		flex-wrap: wrap;
		justify-content: space-around;
		margin: 0;
		padding: 0;
	}
</style>
