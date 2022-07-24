<script>
    import Navbar from './components/Navbar.svelte'
    import Home from './pages/Home.svelte'
    import About from './pages/About.svelte'
    import Schedule from './pages/Schedule.svelte'
    import Speakers from './pages/Speakers.svelte'
    import Faq from './pages/Faq.svelte'
    import Sponsors from './pages/Sponsors.svelte'
    import { innerHeightVal } from './stores.js'

    import Wave from './components/svgs/Wave.svelte'
    import OceanFloor1 from './components/svgs/OceanFloor1.svelte'
    import OceanFloor2 from './components/svgs/OceanFloor2.svelte'
    import OceanFloor3 from './components/svgs/OceanFloor3.svelte'
    import OceanFloor4 from './components/svgs/OceanFloor4.svelte'
    import OceanFloor5 from './components/svgs/OceanFloor5.svelte'

    let color1 = '#A9D8DB'
    let color2 = '#8FC9CF'
    let color3 = '#495F79'
    let color4 = '#242946'
    let color5 = '#000'

    let y

    //binary code rain
    $: innerHeight = 0
    // $: innerHeight, innerHeightVal.set(innerHeight);

    import { onMount } from 'svelte'

    let characters = [
        '01010110',
        '01100001',
        '01101110',
        '01100100',
        '01111001',
        '01001000',
        '01100001',
        '01100011',
        '01101011',
        '01110011',
        '00100000',
        '01001001',
        '01011000',
    ]

    // let confetti = new Array(100)
    //     .fill()
    //     .map((_, i) => {
    //         return {
    //             character: characters[i % characters.length],
    //             x: Math.random() * 100,
    //             y: -20 - Math.random() * 100,
    //             r: 0.1 + Math.random() * 1,
    //         }
    //     })
    //     .sort((a, b) => a.r - b.r)

    // onMount(() => {
    //     let frame

    //     function loop() {
    //         frame = requestAnimationFrame(loop)

    //         confetti = confetti.map((emoji) => {
    //             emoji.y += 0.7 * emoji.r
    //             if (emoji.y > 120) emoji.y = -200
    //             return emoji
    //         })
    //     }

    //     loop()

    //     return () => cancelAnimationFrame(frame)
    // })
    //end of binary code rain
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />

<Navbar {y} />

<Home {y} />
<Wave />
<About {y} />
<Schedule {y} />
<Speakers {y} />
<Faq {y} />
<Sponsors {y} />

<OceanFloor1
    {y}
    color={color1}
    topVal={$innerHeightVal * 2}
    scrollSpeed={0.6}
/>
<OceanFloor2
    {y}
    color={color2}
    topVal={$innerHeightVal * 3}
    scrollSpeed={0.7}
/>
<OceanFloor3
    {y}
    color={color3}
    topVal={$innerHeightVal * 3.85}
    scrollSpeed={0.9}
/>
<OceanFloor4
    {y}
    color={color4}
    topVal={$innerHeightVal * 4.4}
    scrollSpeed={0.9}
/>
<OceanFloor5 color={color5} />

<!-- {#each confetti as c}
    <span
        style="left: {c.x}%; top: {c.y}%; transform: rotate(90deg) scale({c.r});"
        >{c.character}</span
    >
{/each} -->
<style lang="postcss" global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    span {
        position: absolute;
        font-size: 5vw;
        user-select: none;
    }
</style>
