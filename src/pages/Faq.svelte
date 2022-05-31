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
		background-color: rgb(239, 249, 96);
		height: 100vh;
		width: 100%;
		margin: 0 auto;
		position: relative;
	}
</style>
