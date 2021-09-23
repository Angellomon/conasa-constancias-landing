<script>
	import { onMount } from 'svelte';
	import { downloadError, invalidEmail } from '$lib/stores';
	import { validateEmail, consultaEmail } from '$lib/util';
	import Loading from './images/Loading.svelte';
	import RightArrow from './images/RightArrow.svelte';

	let input;
	let consultaCorreo;

	const submit = () => {
		if (!input.value) return;
		invalidEmail.update(() => false);

		if (validateEmail(input.value)) consultaCorreo = consultaEmail(input.value);
	};

	onMount(() => {
		if (!input) return;

		input.focus();
	});
</script>

<label for="correo">
	Correo Electrónico
	<div>
		<input
			on:keydown={(value) => {
				if ((value.keyCode || value.which) == 13) submit();
			}}
			bind:this={input}
			type="email"
		/>
		<span on:click={submit}>
			{#await consultaCorreo}
				<Loading />
			{:then _}
				<RightArrow />
			{/await}
		</span>
	</div>

	{#if $invalidEmail}
		<p class="invalid-email">¡Correo no válido!</p>
	{:else if $downloadError}
		<p class="invalid-email">No se ha encontrado tu correo</p>
	{:else}
		<p class="mensaje">
			Ingresa el correo electrónico con el cual te registraste a la 29° Reunión Anual CONASA
		</p>
	{/if}
</label>

<style>
	label {
		text-align: center;
		font-family: 'Myriad Bold';
		font-size: 20px;
		margin-bottom: 1vh;
		margin-top: 1%;
	}

	input {
		display: inline-block;
		margin-top: 1.5em;
		padding: 0.5rem;

		border: none;
		border-radius: 0.4em;

		height: 20px;
		min-width: 20vw;

		font-family: 'Myriad Bold';
		color: white;
		font-size: 15px;
		text-align: center;

		background-color: #836019;

		box-shadow: -10px -10px 0px 0px #5c461a;
		-webkit-box-shadow: -10px -10px 0px 0px #5c461a;
		-moz-box-shadow: -10px -10px 0px 0px #5c461a;
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	span {
		cursor: pointer;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	p {
		font-family: 'Myriad Regular';
	}

	p.invalid-email {
		color: tomato;
	}

	@media screen and (min-width: 1900px) {
		label {
			text-align: center;
			font-family: 'Myriad Bold';
			font-size: 45px;
			margin-bottom: 3%;
			margin-top: 1%;
		}

		input {
			margin-top: 1.5em;
			height: 40px;
			font-size: 30px;
		}
	}
</style>
