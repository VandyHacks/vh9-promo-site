<script>
	import DiveDeeper from "../components/DiveDeeper.svelte";
	export let y;
</script>

<div id="schedule">
	<div class="center">This is Schedule page {y} px</div>

	<DiveDeeper currentPage="schedule" />
</div>

<style>
	#schedule {
		background-color: rgb(43, 237, 237);
		height: 100vh;
		width: 100%;
		margin: 0 auto;
		position: relative;
	}
</style>
