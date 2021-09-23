<script>
	// import BotonParticipantes from '$lib/components/BotonParticipantes.svelte';
	// import Header from '$lib/components/headers/Principal.svelte';
	import Help from '$lib/components/Help.svelte';
	import InputCorreo from '$lib/components/InputCorreo.svelte';

	const LOGO_SRC = '/images/logos/conasa.png';
</script>

<section>
	<!-- <Header />

	<div class="participantes">
		<BotonParticipantes />
	</div> -->
	<h1>CONSTANCIAS</h1>
	<figure>
		<img src={LOGO_SRC} alt="conasa" />
	</figure>

	<InputCorreo />
	<Help />
</section>

<style>
	/* section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	div.participantes {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 8%;
		margin-bottom: 8%;
	} */

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
			font-size: 100px;
			margin-top: 6%;
		}
		img {
			max-width: 350px;
			margin-top: 0;
		}
	}
</style>
