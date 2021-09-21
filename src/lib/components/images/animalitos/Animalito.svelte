<script>
	export let src = '';
	export let alt = 'animalito';
	export let size = 200;
</script>

<img {src} {alt} height={size} />

<style>
	img {
		padding: 0;
		margin: 0;
		width: auto;
		align-self: flex-end;
	}

	@media screen and (max-width: 1320px) {
		img:nth-last-child(-n + 2) {
			display: none;
		}
	}

	@media screen and (max-width: 1132px) {
		img:nth-last-child(-n + 3) {
			display: none;
		}
	}

	@media screen and (max-width: 1060px) {
		img:nth-last-child(-n + 4) {
			display: none;
		}
	}

	@media screen and (max-width: 957px) {
		img:nth-last-child(-n + 5) {
			display: none;
		}
	}

	@media screen and (max-width: 820px) {
		img:nth-last-child(-n + 6) {
			display: none;
		}
	}

	@media screen and (max-width: 720px) {
		img:nth-last-child(-n + 7) {
			display: none;
		}
	}

	@media screen and (max-width: 627px) {
		img:nth-last-child(-n + 8) {
			display: none;
		}
	}

	@media screen and (max-width: 491px) {
		img:nth-last-child(-n + 9) {
			display: none;
		}
	}

	@media screen and (max-width: 400px) {
		img:nth-last-child(-n + 10) {
			display: none;
		}
	}

	@media screen and (max-width: 317px) {
		img:nth-last-child(-n + 11) {
			display: none;
		}
	}
</style>
