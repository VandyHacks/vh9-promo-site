<script>
	import DiveDeeper from "../components/DiveDeeper.svelte";
	export let y;
</script>

<div id="faq">
	<div class="center">This is FAQ page {y} px</div>

	<DiveDeeper currentPage="faq" />
</div>

<style>
	#faq {
		background: linear-gradient(to bottom, #5f8094, #2a3053 100%);
		background: -o-linear-gradient(to bottom, #5f8094, #2a3053 100%);
		background: -moz-linear-gradient(to bottom, #5f8094, #2a3053 100%);
		background: -webkit-linear-gradient(to bottom, #5f8094, #2a3053 100%);
		height: 100vh;
		width: 100%;
		margin: 0 auto;
		position: relative;
		color: white;
	}

	#faq > * {
		z-index: 1;
	}
</style>
