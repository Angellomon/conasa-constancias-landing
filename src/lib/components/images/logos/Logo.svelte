<script>
	export let src = '';
	export let alt = 'logo';
</script>

<figure>
	<img {src} {alt} />
</figure>

<style>
	figure {
		max-width: 200px;
	}
	img {
		max-width: 30vw;
		height: auto;
	}

	@media screen and (max-width: 890px) {
		img {
			width: 15vw;
		}
	}

	@media screen and (max-width: 420px) {
		img {
			max-width: 50vw;
			width: 90vw;
		}
	}
</style>
