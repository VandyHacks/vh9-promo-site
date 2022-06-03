<script>
	import DiveDeeper from "../components/DiveDeeper.svelte";
	import OceanFloor2 from "../components/svgs/OceanFloor2.svelte";
	import FillerRectangle from "../components/svgs/FillerRectangle.svelte";
	import { innerHeightVal, pageOrder, isAnimationOn } from "../stores.js";
	$: currentPageOrder = $pageOrder["schedule"];
	$: absHeight = $innerHeightVal * currentPageOrder;
	export let y;
	let scroll = 0.5;
	let color = "#8FC9CF";
	let translateAmount = 0;
	$: y,
		(translateAmount =
			y < absHeight - $innerHeightVal
				? absHeight
				: (absHeight - y) * scroll);
</script>

<div id="schedule">
	{#if $isAnimationOn}
		<div id="floor" style="transform: translateY({translateAmount}px)">
			<OceanFloor2 {color} />

			{#if y > absHeight * 0.7}
				<div style="transform: translateY(-400px)">
					<FillerRectangle {color} />
				</div>
			{/if}
		</div>
	{:else}
		<div id="floor">
			<OceanFloor2 {color} />
		</div>
	{/if}

	<div class="center">This is Schedule page {y} px {absHeight}</div>

	<DiveDeeper currentPage="schedule" />
</div>

<style>
	#floor {
		width: 100%;
		height: 100%;
	}
	#schedule {
		background: linear-gradient(
			to bottom,
			#a9d8db,
			#a9d8db 49%,
			#8fc9cf 50%,
			#8fc9cf 100%
		);
		background: -o-linear-gradient(
			to bottom,
			#a9d8db,
			#a9d8db 49%,
			#8fc9cf 50%,
			#8fc9cf 100%
		);
		background: -moz-linear-gradient(
			to bottom,
			#a9d8db,
			#a9d8db 49%,
			#8fc9cf 50%,
			#8fc9cf 100%
		);
		background: -webkit-linear-gradient(
			to bottom,
			#a9d8db,
			#a9d8db 49%,
			#8fc9cf 50%,
			#8fc9cf 100%
		);
		height: 100vh;
		width: 100%;
		margin: 0 auto;
		position: relative;
	}
</style>
