<script>
	const LOGO_SRC = '/images/logos/conasa.png';
</script>

<header>
	<figure>
		<img src={LOGO_SRC} alt="conasa" />
	</figure>

	<h1>CONSTANCIAS</h1>

	<div class="mensaje"><p>"Salud Animal: elemento estratégico en la salud alimentaria"</p></div>
</header>

<style>
	img {
		max-width: 130px;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0;
	}

	h1 {
		font-family: 'Myriad Bold';
		font-size: 70px;
		text-align: center;
	}

	p {
		font-family: 'Myriad Italic';
		color: #f5e18d;
		font-size: 20px;
		text-align: center;
	}

	div.mensaje {
		max-width: 170px;
	}

	@media screen and (min-width: 1900px) {
		img {
			max-width: 350px;
		}

		p {
			font-size: 45px;
		}

		div.mensaje {
			max-width: 400px;
		}

		h1 {
			font-size: 100px;
		}
	}

	@media screen and (max-width: 890px) {
		h1 {
			font-size: 5vw;
		}
	}

	@media screen and (max-width: 420px) {
		header {
			flex-direction: column;
		}

		h1 {
			font-size: 40px;
		}

		img {
			max-width: 70vw;
		}

		p {
			font-size: 25px;
		}

		div.mensaje {
			max-width: 70vw;
		}
	}
</style>
