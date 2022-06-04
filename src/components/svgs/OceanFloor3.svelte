<script>
	import { isAnimationOn } from "../../stores.js";
	export let topVal;
	export let color;
	export let y;
	export let scrollSpeed = 1;
	let translateAmount = 0;
	$: y, (translateAmount = Math.max((topVal - y - 800) * scrollSpeed, -500));
</script>

<svg
	style="top: {topVal}px; {$isAnimationOn
		? `transform: translateY(${translateAmount}px)`
		: ''}"
	width="90%"
	height={$isAnimationOn ? "209vh" : "157vh"}
	viewBox="0 0 1190 1584"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	preserveAspectRatio="none"
>
	<path
		d="M141.567 1281.24C310.438 1215.56 273 762 392.5 718.5C487.199 715.245 515.416 392.023 669.073 392.023C784.975 392.023 772.913 79.442 888.472 100.856C1044.9 129.864 1005.78 54.8673 1118.43 5.01092C1160.16 -13.4789 1190 25.1517 1190 25.1517V1584H275.828H1.93453C1.93453 1584 -27.3049 1346.93 141.567 1281.24Z"
		fill={color}
	/>
</svg>

<style>
	svg {
		position: absolute;
		right: 0;
	}
</style>
