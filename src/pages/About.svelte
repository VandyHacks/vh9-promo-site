<script>
	import DiveDeeper from "../components/DiveDeeper.svelte";
	export let y;
</script>

<div id="about">
	<div class="center">
		<div class="text-heading">About</div>
		<div style="font-family: Futura; text-align: justify; ">
			VandyHacks is Vanderbilt's student-run hackathon, where participants
			from all over the world create innovative projects over the course
			of 36 hours. This year, our hackathon will be a hybrid event on
			October 8th-10th. Virtual and in-person hackers can come together to
			attend skill workshops, network with sponsors, and win cool prizes.
		</div>
	</div>

	<DiveDeeper currentPage="about" />
</div>

<style>
	#about {
		background: linear-gradient(to bottom, #eafdff, #b6dfe2 100%);
		background: -o-linear-gradient(to bottom, #eafdff, #b6dfe2 100%);
		background: -moz-linear-gradient(to bottom, #eafdff, #b6dfe2 100%);
		background: -webkit-linear-gradient(to bottom, #eafdff, #b6dfe2 100%);
		height: 100vh;
		width: 100%;
		margin: 0 auto;
		position: relative;
	}

	#about > * {
		z-index: 1;
	}
</style>
