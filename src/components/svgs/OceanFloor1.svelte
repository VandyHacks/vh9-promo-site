<script>
	import { isAnimationOn } from "../../stores.js";
	export let topVal;
	export let color;
	export let y;
	export let scrollSpeed = 1;
	let translateAmount = 0;
	$: y, (translateAmount = (topVal - y) * scrollSpeed);
</script>

<svg
	style="top: {topVal}px; {$isAnimationOn
		? `transform: translateY(${translateAmount}px)`
		: ''}"
	width="100%"
	height="200vh"
	viewBox="0 0 375 600"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	preserveAspectRatio="none"
>
	<path
		d="M 0 280 C 24.3928 281.289 39.9289 277.0757 58.4865 276.8763 C 97.3328 276.4592 98.2808 250.7443 161.312 250.7443 C 208.856 250.7443 203.908 210.685 251.311 213.4294 C 315.48 217.147 299.43 207.5356 345.64 201.1462 C 362.761 198.7766 375 203.7274 375 203.7274 V 500 H 0 L 0 280 L 0 280 Z"
		fill={color}
	/>
</svg>

<style>
	svg {
		position: absolute;
		left: 0;
	}
</style>
