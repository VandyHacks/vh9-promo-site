<script>
	import DiveDeeper from "../components/DiveDeeper.svelte";
	export let y;
</script>

<div id="about">
	<div class="center">This is about page {y} px</div>

	<DiveDeeper currentPage="about" />
</div>

<style>
	#about {
		background-color: pink;
		height: 100vh;
		width: 100%;
		margin: 0 auto;
		position: relative;
	}
</style>
