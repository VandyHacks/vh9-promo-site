<script>
	import DiveDeeper from "../components/DiveDeeper.svelte";
	import MainLogo from "../components/svgs/MainLogo.svelte";
	import { isAnimationOn } from "../stores.js";
	import MediaQuery from "../MediaQuery.svelte";
	import LogoInstagram from "../components/svgs/Logos/LogoInstagram.svelte";
	import LogoYoutube from "../components/svgs/Logos/LogoYoutube.svelte";
	import LogoGithub from "../components/svgs/Logos/LogoGithub.svelte";
	import LogoDiscord from "../components/svgs/Logos/LogoDiscord.svelte";
	import LogoTwitter from "../components/svgs/Logos/LogoTwitter.svelte";
	import LogoFacebook from "../components/svgs/Logos/LogoFacebook.svelte";
	import Seashell from "../components/svgs/Seashell.svelte";
	import Starfish from "../components/svgs/Starfish.svelte";
	export let y;

	function toggleAnimation() {
		isAnimationOn.set(!$isAnimationOn);
	}
</script>

<div id="home">
	<div class="center beach" style="color: var(--beach-text);">
		<div id="main-logo">
			<MainLogo />
		</div>
		<div id="title">VANDYHACKS IX</div>
		<div id="date">October 21 - 23 | Nashville, TN</div>
		<div id="apply-button">Apply</div>
		<div id="social-media">
			<LogoInstagram />
			<div class="custom-space-between" />
			<LogoYoutube />
			<div class="custom-space-between" />
			<LogoGithub />
			<div class="custom-space-between" />
			<LogoDiscord />
			<div class="custom-space-between" />
			<LogoTwitter />
			<div class="custom-space-between" />
			<LogoFacebook />
		</div>
	</div>

	<div id="beach-background">
		<Seashell />
	</div>

	<MediaQuery query="(min-width: 481px)" let:matches>
		{#if matches}
			<button
				id="animation-toggle"
				class={$isAnimationOn ? "on" : "off"}
				role="switch"
				on:click={toggleAnimation}
			/>
		{/if}
	</MediaQuery>

	<DiveDeeper currentPage="home" />
</div>

<style>
	#home {
		background-color: var(--beach-color);
		height: 100vh;
		width: 100%;
		margin: 0 auto;
		position: relative;
	}

	#apply-button {
		background-color: var(--beach-text);
		color: white;
		font-size: 30px;
		font-family: Futura;
		width: 200px;
		margin: 20px auto 0 auto;
		border-radius: 10px;
		padding: 5px 0;
		box-shadow: 2px 5px 5px grey;
	}

	#apply-button:hover {
		cursor: pointer;
	}

	#animation-toggle {
		border: 0;
		border-radius: 50px;
		position: absolute;
		z-index: 3;
		bottom: 15px;
		left: 15px;
		width: 70px;
		height: 40px;
	}

	.on {
		background-color: #26305d;
	}

	.off {
		background-color: #8e8e8e;
	}

	.on::before,
	.off::before {
		position: absolute;
		content: "";
		border-radius: 50%;
		background: #fff;
		top: 50%;
		/* transform: translateY(-50%); */
		/* right: 5px; */
		width: 40%;
		height: 70%;
	}

	.on::before {
		-webkit-transform: translateX(-26px);
		-ms-transform: translateX(26px);
		transform: translateY(-50%);
		transition: 200ms;
	}

	.off::before {
		-webkit-transform: translateX(-26px);
		-ms-transform: translateX(-26px);
		transform: translateX(-26px) translateY(-50%);
		transition: 200ms;
	}

	.on::after,
	.off::after {
		position: absolute;
		font-size: 1.5em;
		color: white;
		white-space: nowrap;
		top: 50%;
		transform: translateY(-50%);
		left: 80px;
	}

	.on::after {
		content: "Animations ON";
	}

	.off::after {
		content: "Animations OFF";
	}

	#animation-toggle:hover {
		cursor: pointer;
	}
	#main-logo {
		width: max(20vh, 11vw);
		margin: 0 auto;
	}

	#title {
		font-size: max(5vh, 3vw);
		white-space: nowrap;
		padding-top: 1vh;
	}

	#date {
		font-size: max(2.5vh, 1.5vw);
		font-family: Futura;
		white-space: nowrap;
	}

	#social-media {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 30px auto 0 auto;
	}

	.custom-space-between {
		width: 3vw;
	}

	#beach-background {
		position: absolute;
		top: 100px;
		left: 1vw;
		width: 30vw;
		height: 70vh;
	}
</style>
