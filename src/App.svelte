<svelte:head>
  <link href="http://fonts.cdnfonts.com/css/fisherman" rel="stylesheet">
</svelte:head>

<script>
	import Header from "./components/Header.svelte";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Schedule from "./pages/Schedule.svelte";
	import Speakers from "./pages/Speakers.svelte";
	import Sponsors from "./pages/Sponsors.svelte";
	import Faq from "./pages/Faq.svelte";

	let y;
</script>

<svelte:window bind:scrollY={y}/>

<Header {y}/>

<Home {y}/>
<About {y}/>
<Schedule {y}/>
<Speakers {y}/>
<Faq {y}/>
<Sponsors {y}/>

<style>
	:global(body) {
		background-color: #F1FEFF;
		text-align: center;
		padding: 0;
		margin: 0 auto;
		border: 0;
		font-family: 'Fisherman', sans-serif;
		position: relative;
		line-height: 1.5;
	}

	:global(.center) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
	}
</style>