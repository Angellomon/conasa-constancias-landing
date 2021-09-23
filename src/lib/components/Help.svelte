<script>
	import { fly } from 'svelte/transition';
</script>

<div>
	<p>
		Si tienes dudas envía un correo a <a href="mailto:coordinacion.general@conasamexico.org"
			>coordinacion.general@conasamexico.org</a
		>
	</p>
</div>

<style>
	div {
		background-color: #836019;
		border-radius: 10px;

		max-width: 30vw;
		padding-top: 0;
		align-self: flex-end;
		margin-right: 5vw;
	}

	p {
		font-family: 'Myriad Regular';
		color: white;
		text-align: center;
		font-size: 20px;
		margin-top: 0.5em;
		margin-bottom: 0.5em;
	}

	a {
		font-family: 'Myriad Bold';
		color: white;
		text-decoration: none;
	}

	@media screen and (min-width: 1900px) {
		div {
			border-radius: 25px;
		}

		p {
			font-size: 35px;
		}
	}

	@media screen and (max-width: 1132px) {
		p {
			font-size: 15px;
		}
	}

	@media screen and (max-width: 957px) {
		p {
			font-size: 10px;
		}
	}

	@media screen and (max-width: 627px) {
		p {
			font-size: 20px;
		}
		div {
			max-width: 80vw;
			align-self: center;
			margin-right: unset;
		}
	}

	@media screen and (max-width: 491px) {
	}

	@media screen and (max-width: 420px) {
		div {
			max-width: 85vw;
		}
		p {
			font-size: 15px;
		}
	}
</style>
