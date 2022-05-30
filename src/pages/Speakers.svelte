<script>
	import DiveDeeper from "../components/DiveDeeper.svelte";
	export let y;
</script>

<div id="speakers">
	<div class="center">This is Speakers page {y} px</div>

	<DiveDeeper />
</div>

<style>
	#speakers {
		background-color: rgb(181, 169, 255);
		height: 100vh;
		width: 100%;
		margin: 0 auto;
		position: relative;
	}
</style>
