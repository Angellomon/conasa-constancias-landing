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
		width: auto;
		height: 80px;
	}
</style>
