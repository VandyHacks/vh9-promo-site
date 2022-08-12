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

    import Particles from 'svelte-particles'
    import { loadFull } from 'tsparticles'

    let color1 = '#A9D8DB'
    let color2 = '#8FC9CF'
    let color3 = '#495F79'
    let color4 = '#242946'
    let color5 = '#000'

    let y

    let particlesUrl = 'http://foo.bar/particles.json'

    let particlesConfig = {
        particles: {
            shape: {
                text: {
                    value: ['1', '0'],
                },
            },
        },
        preset: 'stars',
    }

    let onParticlesLoaded = (event) => {
        const particlesContainer = event.detail.particles
    }

    let particlesInit = async (engine) => {
        await loadFull(engine)
    }

    //binary code rain
    $: innerHeight = 0
    // $: innerHeight, innerHeightVal.set(innerHeight);
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />

<Home {y} />
<Navbar {y} />
<Wave {y} />
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

<Particles
    class="particles"
    id="tsparticles"
    options={particlesConfig}
    on:particlesLoaded={onParticlesLoaded}
    {particlesInit}
/>

<style lang="postcss" global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    span {
        position: absolute;
        font-size: 5vw;
        user-select: none;
    }

    .particles {
        z-index: 10;
    }
</style>
