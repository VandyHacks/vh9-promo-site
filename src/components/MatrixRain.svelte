<!-- referenced from here (https://git.sr.ht/~henriquehbr/archive) -->
<script>
  import { onMount } from "svelte";
  export let chars =
    "01010111 01100101 01101100 01100011 01101111 01101101 01100101 00100000 01110100 01101111 00100000 01010110 01100001 01101110 01100100 01111001 01001000 01100001 01100011 01101011 01110011 00100000 01001001 01011000";
  export let width = null;
  export let height = null;
  export const noInitialDrop = false;
  export const fontSize = 16;
  export const color = "#0f0";
  export const interval = 33;

  let canvas;
  let windowWidth = 300;
  let windowHeight = 150;

  $: cols = Math.round((width ? width : windowWidth) / fontSize);
  $: drops = Array(cols).fill(
    noInitialDrop ? (height ? height : windowHeight) : 0
  );

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  onMount(async () => {
    // Sync canvas dimensions with window
    [windowWidth, windowHeight] = await [window.innerWidth, window.innerHeight];
    const ctx = canvas.getContext("2d");
    while (true) {
      // Black bg for the canvas, translucent to show trail
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // ctx.clearRect(255, 255, canvas.width, canvas.height);

      // Green text
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px arial`;

      // Looping
      for (let i = 0; i < drops.length; i++) {
        // Displays a random character from chars
        const randomChar = Math.floor(Math.random() * chars.length);
        const text = chars[randomChar];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        const reachedEndOfScreen =
          drops[i] * fontSize > canvas.height && Math.random() > 0.975;
        if (reachedEndOfScreen) drops[i] = 0;
        drops[i]++;
      }
      await sleep(interval);
    }
  });
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<canvas
  bind:this={canvas}
  width={width ? width : windowWidth}
  height={height ? height : windowHeight}
/>
