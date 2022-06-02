<script>
	import { pageOrder } from "../stores.js";
	import { navigateTo } from "./Navbar.svelte";
	export let currentPage;
</script>

<div id="dive-deeper">
	<div
		id="dive-deeper-button"
		on:click={navigateTo($pageOrder[currentPage] + 1)}
	>
		<div id="text">Dive Deeper</div>
		<div id="arrow">
			<ul>
				<li />
				<li />
			</ul>
		</div>
	</div>
</div>

<style>
	#dive-deeper {
		font-family: Arial, Helvetica, sans-serif;
		position: absolute;
		width: 100%;
		height: 100px;
		bottom: 0;
		z-index: 2;
		letter-spacing: 2px;
		font-size: 24px;
		font-weight: 500;
		color: white;
	}

	#dive-deeper-button {
		width: 20vw;
		min-width: 250px;
		height: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#dive-deeper-button:hover {
		cursor: pointer;
	}

	#text {
		padding-top: 10px;
	}

	#arrow > ul {
		list-style: none;
		position: relative;
	}

	#arrow > ul > li {
		width: 24px;
		height: 4px;
		background-color: white;
	}

	#arrow > ul > li:nth-child(1) {
		left: 0;
		top: -10px;
		position: absolute;
		transform: rotate(45deg);
		border-radius: 5px 0 0 5px;
	}

	#arrow > ul > li:nth-child(2) {
		left: 14px;
		top: -10px;
		position: absolute;
		border-radius: 0 5px 5px 0;
		transform: rotate(-45deg);
	}
</style>
