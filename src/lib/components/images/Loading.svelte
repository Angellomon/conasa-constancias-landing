<img src="/svg/loading.svg" alt="loading" />

<style>
	img {
		transition-property: transform;
		animation-name: spin;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		animation-duration: 3s;

		-webkit-transition-property: transform;
		-webkit-animation-name: spin;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: linear;
		-webkit-animation-duration: 3s;

		-moz-transition-property: transform;
		-moz-animation-name: spin;
		-moz-animation-iteration-count: infinite;
		-moz-animation-timing-function: linear;
		-moz-animation-duration: 3s;

		-ms-transition-property: transform;
		-ms-animation-name: spin;
		-ms-animation-iteration-count: infinite;
		-ms-animation-timing-function: linear;
		-ms-animation-duration: 3s;

		max-width: 20px;
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(138deg) brightness(110%) contrast(101%);
		position: absolute;
		float: right;
		margin-left: -22px;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
