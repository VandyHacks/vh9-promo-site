<script>
	import DiveDeeper from "../components/DiveDeeper.svelte";
	import OceanFloor1 from "../components/svgs/OceanFloor1.svelte";
	import FillerRectangle from "../components/svgs/FillerRectangle.svelte";
	import { innerHeightVal, pageOrder, isAnimationOn } from "../stores.js";
	$: currentPageOrder = $pageOrder["about"];
	$: absHeight = $innerHeightVal * currentPageOrder;
	export let y;
	let scroll = 0.3;
	let color = "#A9D8DB";
	let translateAmount = 0;
	$: y,
		(translateAmount =
			y < absHeight * 0.7
				? absHeight * 0.7
				: y > absHeight * 2
				? 0
				: (absHeight - y) * scroll);
</script>

<div id="about">
	{#if $isAnimationOn}
		<div id="floor" style="transform: translateY({translateAmount}px)">
			<OceanFloor1 {color} />

			{#if y > absHeight * 0.7}
				<div style="transform: translateY(-10px)">
					<FillerRectangle {color} />
				</div>
			{/if}
		</div>
	{:else}
		<div id="floor">
			<OceanFloor1 {color} />
		</div>
	{/if}

	<div class="center">This is about page {y} px</div>

	<DiveDeeper currentPage="about" />
</div>

<style>
	#floor {
		width: 100%;
		height: 100%;
		bottom: 0;
		left: 0;
	}

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
</style>
