<script>
	import Navbar from "./components/Navbar.svelte";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Schedule from "./pages/Schedule.svelte";
	import Speakers from "./pages/Speakers.svelte";
	import Faq from "./pages/Faq.svelte";
	import Sponsors from "./pages/Sponsors.svelte";
	import { innerHeightVal } from "./stores.js";

	import OceanFloor1 from "./components/svgs/OceanFloor1.svelte";
	import OceanFloor2 from "./components/svgs/OceanFloor2.svelte";
	import OceanFloor3 from "./components/svgs/OceanFloor3.svelte";
	import OceanFloor4 from "./components/svgs/OceanFloor4.svelte";
	import OceanFloor5 from "./components/svgs/OceanFloor5.svelte";
	let color1 = "#A9D8DB";
	let color2 = "#8FC9CF";
	let color3 = "#495F79";
	let color4 = "#242946";
	let color5 = "#000";

	let y;

	$: innerHeight = 0;
	// Whenever innerHeight is changed, update the value of innerHeightVal.
	$: innerHeight, innerHeightVal.set(innerHeight);
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />

<Navbar {y} />

<Home {y} />
<About {y} />
<Schedule {y} />
<Speakers {y} />
<Faq {y} />
<Sponsors {y} />

<OceanFloor1
	{y}
	color={color1}
	topVal={$innerHeightVal * 1}
	scrollSpeed={0.6}
/>
<OceanFloor2
	{y}
	color={color2}
	topVal={$innerHeightVal * 2}
	scrollSpeed={0.7}
/>
<OceanFloor3
	{y}
	color={color3}
	topVal={$innerHeightVal * 2.85}
	scrollSpeed={0.9}
/>
<OceanFloor4
	{y}
	color={color4}
	topVal={$innerHeightVal * 3.4}
	scrollSpeed={0.9}
/>
<OceanFloor5 color={color5} />
