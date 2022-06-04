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
		background: linear-gradient(to bottom, #eafdff, #b6dfe2 100%);
		background: -o-linear-gradient(to bottom, #eafdff, #b6dfe2 100%);
		background: -moz-linear-gradient(to bottom, #eafdff, #b6dfe2 100%);
		background: -webkit-linear-gradient(to bottom, #eafdff, #b6dfe2 100%);
		height: 100vh;
		width: 100%;
		margin: 0 auto;
		position: relative;
	}

	#about > * {
		z-index: 1;
	}
</style>
