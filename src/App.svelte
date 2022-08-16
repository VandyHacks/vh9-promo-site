<script>
    import Navbar from './components/Navbar.svelte'
    import Home from './pages/Home.svelte'
    import About from './pages/About.svelte'
    import Schedule from './pages/Schedule.svelte'
    import Speakers from './pages/Speakers.svelte'
    import Faq from './pages/Faq.svelte'
    import Sponsors from './pages/Sponsors.svelte'

    import Wave from './components/svgs/Wave.svelte'

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
            overlap: false,
            color: {
                value: '#ffffff',
            },
            links: {
                enable: false,
            },
            move: {
                enable: false,
                outModes: {
                    bottom: 'out',
                    left: 'out',
                    right: 'out',
                    top: 'out',
                },
            },
            number: {
                density: {
                    enable: true,
                },
                value: 20,
            },
            opacity: {
                value: {
                    min: 0.1,
                    max: 0.5,
                },
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                },
            },
            shape: {
                options: {
                    character: {
                        value: ['0', '1'],
                        font: 'Verdana',
                        style: '',
                        weight: '400',
                        fill: true,
                    },
                    char: {
                        value: ['1', '0'],
                        font: 'Verdana',
                        style: '',
                        weight: '400',
                        fill: true,
                    },
                },
                type: 'char',
            },
            size: {
                value: 16,
                animation: {
                    speed: 10,
                    minimumValue: 10,
                },
            },
            stroke: {
                width: 1,
                color: {
                    value: '#ffffff',
                    animation: {
                        '1': {
                            count: 0,
                            enable: false,
                            offset: 0,
                            speed: 1,
                            decay: 0,
                            sync: true,
                        },
                        '0': {
                            count: 0,
                            enable: false,
                            offset: 0,
                            speed: 1,
                            decay: 0,
                            sync: true,
                        },
                    },
                },
            },
        },
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
<div
    class="relative bg-no-repeat bg-center bg-[length:100vw_500vh]"
    style="background-image: url(png/OceanBackground.png)"
>
    <About {y} />
    <Schedule {y} />
    <Speakers {y} />
    <Faq {y} />
    <Sponsors {y} />
</div>

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
