<script>
	import { Router, Link } from "svelte-routing";
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";
	import { pageOrder, innerHeightVal } from "../stores.js";
	import MediaQuery from "../MediaQuery.svelte";
	import Hamburger from "../components/svgs/Hamburger.svelte";
	import CrossCircle from "../components/svgs/CrossCircle.svelte";
	export let y;
	let navbarOpen = false;

	// Navigate to section specified by page url, if available. Otherwise, remain at the top.
	onMount(() => {
		let url = window.location.href;
		let page = url.split("/")[3].toLocaleLowerCase();
		if ($pageOrder[page]) navigateTo($pageOrder[page]);
	});

	function navigateTo(target) {
		setTimeout(() => {
			navbarOpen = false;
			window.scrollTo({
				top: $innerHeightVal * target,
				left: 0,
				behavior: "smooth",
			});
		}, 250);
	}

	function openNavbar() {
		navbarOpen = true;
	}

	function closeNavbar() {
		navbarOpen = false;
	}
</script>

<!-- Default -->
<MediaQuery query="(min-width: 481px)" let:matches>
	{#if matches}
		<div id="navbar-top">
			<Router>
				<Link
					to="about"
					on:click={() => navigateTo($pageOrder["about"])}>About</Link
				>
				<Link
					to="schedule"
					on:click={() => navigateTo($pageOrder["schedule"])}
					>Schedule</Link
				>
				<Link
					to="speakers"
					on:click={() => navigateTo($pageOrder["speakers"])}
					>Speakers</Link
				>
				<Link to="faq" on:click={() => navigateTo($pageOrder["faq"])}
					>FAQ</Link
				>
				<Link
					to="sponsors"
					on:click={() => navigateTo($pageOrder["sponsors"])}
					>Sponsors</Link
				>
				<div />
			</Router>
		</div>

		{#if y >= $innerHeightVal / 2}
			<div id="navbar-side" transition:fade>
				<div id="submarine-container">
					<div class="center">Submarine buddy goes here</div>
				</div>
			</div>
		{/if}
	{/if}
</MediaQuery>

<!-- Mobile -->
<MediaQuery query="(max-width: 480px)" let:matches>
	{#if matches}
		<div id="hamburger" on:click={openNavbar}>
			<Hamburger />
		</div>
		{#if navbarOpen}
			<div id="navbar-mobile" transition:fly={{ duration: 200, x: -200 }}>
				<div id="close-button" on:click={closeNavbar}>
					<CrossCircle />
				</div>
				<div id="navbar-mobile-container">
					<Router>
						<Link
							to="about"
							on:click={() => navigateTo(pageOrder["about"])}
							>About</Link
						>
						<Link
							to="schedule"
							on:click={() => navigateTo(pageOrder["schedule"])}
							>Schedule</Link
						>
						<Link
							to="speakers"
							on:click={() => navigateTo(pageOrder["speakers"])}
							>Speakers</Link
						>
						<Link
							to="faq"
							on:click={() => navigateTo(pageOrder["faq"])}
							>FAQ</Link
						>
						<Link
							to="sponsors"
							on:click={() => navigateTo(pageOrder["sponsors"])}
							>Sponsors</Link
						>
						<div />
					</Router>
				</div>
			</div>
		{/if}
	{/if}
</MediaQuery>

<style>
	#navbar-top {
		display: flex;
		justify-content: space-around;
		position: absolute;
		z-index: 1;
		width: 100%;
		padding: 30px 0;
	}

	#navbar-side {
		position: fixed;
		width: 5vw;
		min-width: 80px;
		height: 100vh;
		z-index: 1;
		left: 0;
	}

	#navbar-top > :global(a) {
		color: var(--beach-text);
		font-size: 1.5em;
	}

	#submarine-container {
		position: absolute;
		background-color: aquamarine;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
		height: 50%;
	}

	#hamburger {
		position: fixed;
		z-index: 1;
		top: 30px;
		left: 30px;
	}

	#navbar-mobile {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 60vw;
		height: 100%;
		background-color: white;
		border-radius: 5px;
		box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.2);
	}

	#navbar-mobile-container {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 100px 0 0 30px;
		font-size: 28px;
		text-align: start;
		color: black;
	}

	#close-button {
		position: absolute;
		/* background-color: pink; */
		top: 30px;
		right: 20px;
		transform: scale(1.5);
	}
</style>
