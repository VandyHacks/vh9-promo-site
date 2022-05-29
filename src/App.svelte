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

	// import { onMount } from 'svelte';
	// let url = ``;
	// onMount(() => url = window.location.href);
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />

<Navbar {y} {innerHeight} />

<Home {y} />
<About {y} />
<Schedule {y} />
<Speakers {y} />
<Faq {y} />
<Sponsors {y} />

<style>
	:global(body) {
		background-color: #f1feff;
		text-align: center;
		padding: 0;
		margin: 0 auto;
		border: 0;
		font-family: "Fisherman", sans-serif;
		position: relative;
		line-height: 1.5;
	}

	@font-face {
		font-family: "Fisherman";
		src: url("/fonts/Fisherman.otf") format("opentype");
	}

	:global(.center) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
