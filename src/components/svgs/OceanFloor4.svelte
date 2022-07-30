<script>
    import { isAnimationOn } from '../../stores.js'
    export let topVal
    export let color
    export let y
    export let scrollSpeed = 1
    let translateAmount = 0
    // $: y, (translateAmount = Math.max((topVal - y - 1000) * scrollSpeed, -400))
</script>

<svg
    style="top: {topVal}px; min-width: 200px; {$isAnimationOn
        ? `transform: translateY(${translateAmount}px)`
        : ''}"
    class="w-[15%] h-[250vh] absolute left-0"
    viewBox="0 0 286 2284"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
>
    <path
        d="M281.681 1281.24C240.684 1221.89 247.009 392.023 139.957 392.023C108.817 392.023 112.058 79.442 81.0112 100.856C38.9833 129.864 49.4954 54.8673 19.2294 5.01092C8.01635 -13.4789 0.000154127 25.1517 0.000154127 25.1517V1584V1857L-6.02007e-06 2284C-6.02007e-06 2284 327.052 1346.93 281.681 1281.24Z"
        fill={color}
    />
</svg>
