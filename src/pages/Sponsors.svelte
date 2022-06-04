<script>
	export let y;
</script>

<div id="sponsors">
	<div class="center">This is sponsors page {y} px</div>
</div>

<style>
	#sponsors {
		background: linear-gradient(to bottom, #2a3053, #1b2035 100%);
		background: -o-linear-gradient(to bottom, #2a3053, #1b2035 100%);
		background: -moz-linear-gradient(to bottom, #2a3053, #1b2035 100%);
		background: -webkit-linear-gradient(to bottom, #2a3053, #1b2035 100%);
		height: 100vh;
		width: 100%;
		margin: 0 auto;
		position: relative;
		color: white;
	}

	#sponsors > * {
		z-index: 1;
	}
</style>
