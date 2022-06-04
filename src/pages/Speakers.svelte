<script>
	import DiveDeeper from "../components/DiveDeeper.svelte";
	export let y;
</script>

<div id="speakers">
	<div class="center">This is Speakers page {y} px</div>

	<DiveDeeper currentPage="speakers" />
</div>

<style>
	#speakers {
		background: linear-gradient(to bottom, #8fc9cf, #5f8094 100%);
		background: -o-linear-gradient(to bottom, #8fc9cf, #5f8094 100%);
		background: -moz-linear-gradient(to bottom, #8fc9cf, #5f8094 100%);
		background: -webkit-linear-gradient(to bottom, #8fc9cf, #5f8094 100%);
		height: 100vh;
		width: 100%;
		margin: 0 auto;
		position: relative;
		color: white;
	}

	#speakers > * {
		z-index: 1;
	}
</style>
