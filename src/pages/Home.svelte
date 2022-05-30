<script>
	import DiveDeeper from "../components/DiveDeeper.svelte";
	import MainLogo from "../components/MainLogo.svelte";
	export let y;
</script>

<div id="home">
	<div class="center beach" style="color: var(--beach-text);">
		<MainLogo />
		<div style="font-size: 42px; white-space: nowrap; padding-top: 10px;">
			VANDYHACKS IX
		</div>
		<div style="font-size: 24px; font-family: Futura; white-space: nowrap;">
			October 21 - 23 | Nashville, TN
		</div>
		<div class="apply-button">Apply</div>
	</div>

	<svg viewbox="0 0 100 20">
		<path opacity="0.5" d="M0 30 V12 Q30 0 55 12 T100 11 V30z" />
		<path d="M0 30 V12 Q30 20 55 12 T100 11 V30z" />
	</svg>

	<DiveDeeper />
</div>

<style>
	#home {
		background-color: var(--beach-color);
		height: 100vh;
		width: 100%;
		margin: 0 auto;
		position: relative;
	}

	.apply-button {
		font-size: 30px;
		font-family: Futura;
		color: black;
		background-color: white;
		width: 200px;
		margin: 20px auto 0 auto;
		border-radius: 10px;
		padding: 5px 0;
		box-shadow: 2px 5px 5px grey;
	}

	.apply-button:hover {
		cursor: pointer;
	}

	svg {
		position: absolute;
		z-index: 1;
		width: 100%;
		bottom: 0;
		left: 0;
		pointer-events: none;
	}

	svg > path {
		fill: var(--ocean-color);
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
		animation-duration: 10s;
	}

	svg > path:nth-child(1) {
		animation-name: oceanWave1;
	}

	svg > path:nth-child(2) {
		animation-name: oceanWave2;
	}

	@keyframes oceanWave1 {
		0% {
			d: path("M0 30 V12 Q30 0 55 12 T100 11 V30z");
		}
		50% {
			d: path("M0 30 V12 Q30 20 55 12 T100 11 V30z");
		}
		100% {
			d: path("M0 30 V12 Q30 0 55 12 T100 11 V30z");
		}
	}

	@keyframes oceanWave2 {
		0% {
			d: path("M0 30 V12 Q30 20 55 12 T100 11 V30z");
		}
		50% {
			d: path("M0 30 V12 Q30 0 55 12 T100 11 V30z");
		}
		100% {
			d: path("M0 30 V12 Q30 20 55 12 T100 11 V30z");
		}
	}
</style>
