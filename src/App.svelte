<script>
	import Header from "./components/Header.svelte";
	import About from "./pages/About.svelte";
	import Schedule from "./pages/Schedule.svelte";
	import Speakers from "./pages/Speakers.svelte";
	import Sponsors from "./pages/Sponsors.svelte";
	import Faq from "./pages/Faq.svelte";
</script>

<Header />

<About />
<Schedule />
<Speakers />
<Sponsors />
<Faq />

<style>
	:global(body) {
		background-color: #F1FEFF;
		text-align: center;
		padding: 0;
		margin: 0 auto;
		border: 0;
	}

	:global(.center) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
	}
</style>