<script>
	const LOGO_SRC = '/images/logos/conasa.png';
</script>

<section>
	<figure>
		<img src={LOGO_SRC} alt="conasa" />
	</figure>

	<h1>CONSTANCIAS</h1>

	<div class="mensaje"><p>"Salud Animal: elemento estratégico en la salud alimentaria"</p></div>
</section>

<div class="participantes">
	<button><a href="/participantes">PARTICIPANTES</a></button>
</div>

<style>
	img {
		max-width: 130px;
	}
	section {
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

	div.participantes {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 8%;
		margin-bottom: 8%;
	}

	button {
		padding-left: 5px;
		padding-right: 5px;
		border: none;
		border-radius: 0.4em;
		height: 50px;
		font-family: 'Myriad Bold';
		color: white;
		background-color: #836019;
		font-size: 35px;
		padding: 0.5rem;
		box-shadow: -10px -10px 0px 0px #5c461a;
		-webkit-box-shadow: -10px -10px 0px 0px #5c461a;
		-moz-box-shadow: -10px -10px 0px 0px #5c461a;
		cursor: pointer;
	}

	a {
		text-decoration: none;
		color: white;
	}

	@media screen and (min-width: 1900px) {
		button {
			height: 75px;
			font-size: 45px;
		}

		img {
			max-width: 350px;
		}

		p {
			font-size: 45px;
		}

		div.mensaje {
			max-width: 400px;
		}
	}
</style>
