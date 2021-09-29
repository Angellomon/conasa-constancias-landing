<script>
	// import BotonParticipantes from '$lib/components/BotonParticipantes.svelte';
	// import Header from '$lib/components/headers/Principal.svelte';
	import Help from '$lib/components/Help.svelte';
	import InputCorreo from '$lib/components/InputCorreo.svelte';

	const BASE_LOGO_URL = '/images/logos';

	const LOGO_SRC = `${BASE_LOGO_URL}/conasa-correo.png`;
	const LOGO_BLANCO_SRC = `${BASE_LOGO_URL}/conasa-blanco.png`;
</script>

<section>
	<!-- <Header />

	<div class="participantes">
		<BotonParticipantes />
	</div> -->
	<figure>
		<img class="logo-blanco" src={LOGO_BLANCO_SRC} alt="logo conasa blanco" />
	</figure>
	<h1>CONSTANCIAS</h1>
	<figure>
		<img class="logo-centro" src={LOGO_SRC} alt="conasa" />
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
		margin-top: 0;
	}

	img.logo-centro {
		max-width: 400px;
		margin-top: -5px;
	}
	img.logo-blanco {
		position: absolute;
		left: 3vw;
		top: 3vh;
		max-width: 250px;
	}

	@media screen and (min-width: 1900px) {
		h1 {
			font-size: 100px;
			margin-top: 0;
		}
		img.logo-centro {
			max-width: 650px;
			margin-top: 0;
		}

		img.logo-blanco {
			max-width: 350px;
		}
	}

	@media screen and (max-width: 1320px) {
		h1 {
			margin-top: 5vh;
		}

		img.logo-centro {
			max-width: 500px;
			margin-top: 1vh;
		}

		img.logo-blanco {
			max-width: 150px;
			right: 5vw;
			left: unset;
			top: 3vh;
		}
	}
	@media screen and (max-width: 491px) {
		img.logo-centro {
			max-width: 70vw;
			margin-top: 1vh;
		}
	}

	@media screen and (max-width: 317px) {
		h1 {
			font-size: 30px;
		}
	}
</style>
