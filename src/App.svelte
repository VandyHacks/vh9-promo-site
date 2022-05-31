<script>
	import Navbar from "./components/Navbar.svelte";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Schedule from "./pages/Schedule.svelte";
	import Speakers from "./pages/Speakers.svelte";
	import Faq from "./pages/Faq.svelte";
	import Sponsors from "./pages/Sponsors.svelte";
	import { innerHeightVal } from "./stores.js";

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
