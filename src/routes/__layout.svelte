<script>
	import Animalitos from '$lib/components/images/animalitos/Animalitos.svelte';
	import Logos from '$lib/components/images/logos/Logos.svelte';
	import Anuncio from '$lib/components/Anuncio.svelte';
</script>

<section>
	<slot />
	<footer>
		<Animalitos />
		<Anuncio />
		<Logos />
	</footer>
</section>

<style>
	@font-face {
		font-family: 'Myriad Regular';
		src: url('fonts/myriad-pro-regular.ttf');
	}
	@font-face {
		font-family: 'Myriad Italic';
		src: url('fonts/myriad-pro-italic.ttf');
	}
	@font-face {
		font-family: 'Myriad Bold';
		src: url('fonts/myriad-pro-bold.ttf');
	}

	:root {
		font-family: 'Myriad Regular';
		color: white;
	}

	section {
		display: flex;
		border: 1px solid #836019;
		padding: 0.9%;
		margin: 0.7%;
		flex-direction: column;
	}

	footer {
		display: flex;
		flex-direction: column;
	}
</style>
