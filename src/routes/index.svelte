<script>
	import Header from '$lib/components/headers/Principal.svelte';
	const LOGO_SRC = '/images/logos/conasa.png';
</script>

<section>
	<Header />

	<div class="participantes">
		<button><a href="/participantes">PARTICIPANTES</a></button>
	</div>
</section>

<style>
	section {
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
	}
</style>
