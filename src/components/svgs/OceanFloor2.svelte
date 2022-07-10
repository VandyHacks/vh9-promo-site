<script>
    import { isAnimationOn } from '../../stores.js'
    export let topVal
    export let color
    export let y
    export let scrollSpeed = 1
    let translateAmount = 0
    $: y, (translateAmount = Math.max((topVal - y - 200) * scrollSpeed, -15))
</script>

<svg
    style="top: {topVal}px; {$isAnimationOn
        ? `transform: translateY(${translateAmount}px)`
        : ''}"
    width="100%"
    height="100vh"
    viewBox="0 0 375 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
>
    <path
        d="M 0 0 C 11 0 19 7 34 8 C 44 8 56 10 69 14 C 79 16 117 16 138 25 C 164 30 196 30 222 27 C 250 23 347 27 375 35 V 160 H 0 Z"
        fill={color}
    />
</svg>

<style>
    svg {
        position: absolute;
        left: 0;
    }
</style>
