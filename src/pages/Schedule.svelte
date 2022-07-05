<script>
  import DiveDeeper from "../components/DiveDeeper.svelte";
  export let y;
</script>

<div id="schedule">
  <div class="center">This is Schedule page {y} px</div>
  <DiveDeeper currentPage="schedule" />
</div>

<style>
  #schedule {
    background: linear-gradient(
      to bottom,
      #a9d8db,
      #a9d8db 69%,
      #8fc9cf 70%,
      #8fc9cf 100%
    );
    background: -o-linear-gradient(
      to bottom,
      #a9d8db,
      #a9d8db 69%,
      #8fc9cf 70%,
      #8fc9cf 100%
    );
    background: -moz-linear-gradient(
      to bottom,
      #a9d8db,
      #a9d8db 69%,
      #8fc9cf 70%,
      #8fc9cf 100%
    );
    background: -webkit-linear-gradient(
      to bottom,
      #a9d8db,
      #a9d8db 69%,
      #8fc9cf 70%,
      #8fc9cf 100%
    );
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }

  #schedule > * {
    z-index: 1;
  }
</style>
