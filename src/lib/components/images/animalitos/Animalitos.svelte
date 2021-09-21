<script>
	import Animalito from './Animalito.svelte';

	const animalitos = [
		{ src: '/images/animalitos/cerdo.png', alt: 'Cerdo', size: 50 },
		{ src: '/images/animalitos/caballo.png', alt: 'Caballo', size: 120 },
		{ src: '/images/animalitos/murcielago.png', alt: 'Murciélago', size: 60 },
		{ src: '/images/animalitos/conejo.png', alt: 'Conejo', size: 80 },
		{ src: '/images/animalitos/abeja.png', alt: 'Abeja', size: 70 },
		{ src: '/images/animalitos/raton.png', alt: 'Ratón', size: 50 },
		{ src: '/images/animalitos/venado.png', alt: 'Venado', size: 120 },
		{ src: '/images/animalitos/pez.png', alt: 'Pez', size: 60 },
		{ src: '/images/animalitos/perro-y-gato.png', alt: 'Perro y Gato', size: 70 },
		{ src: '/images/animalitos/gato.png', alt: 'Gato', size: 40 },
		{ src: '/images/animalitos/gallina.png', alt: 'Gallina', size: 70 },
		{ src: '/images/animalitos/cerdo.png', alt: 'Cerdo', size: 50 },
		{ src: '/images/animalitos/caballo.png', alt: 'Caballo', size: 120 }
	];
</script>

<div>
	{#each animalitos as animalito}
		<Animalito {...animalito} />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-end;
	}
</style>
