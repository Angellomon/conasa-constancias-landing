<script>
	import InputCorreo from '$lib/components/InputCorreo.svelte';

	const LOGO_SRC = '/images/logos/conasa.png';
</script>

<section>
	<h1>CONSTANCIAS</h1>
	<figure>
		<img src={LOGO_SRC} alt="conasa" />
	</figure>

	<InputCorreo />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	h1 {
		font-family: 'Myriad Bold';
		font-size: 50px;
		text-align: center;
		margin-bottom: 0;
	}

	img {
		max-width: 200px;
		margin-top: -5px;
	}

	@media screen and (min-width: 1900px) {
		h1 {
			font-size: 80px;
			margin-top: 6%;
		}
		img {
			max-width: 350px;
			margin-top: 0;
		}
	}
</style>
