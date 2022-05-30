<script>
	import Navbar from "./components/Navbar.svelte";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Schedule from "./pages/Schedule.svelte";
	import Speakers from "./pages/Speakers.svelte";
	import Faq from "./pages/Faq.svelte";
	import Sponsors from "./pages/Sponsors.svelte";

	let y;
	$: innerHeight = 0;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />

<Navbar {y} {innerHeight} />

<Home {y} />
<About {y} />
<Schedule {y} />
<Speakers {y} />
<Faq {y} />
<Sponsors {y} />
