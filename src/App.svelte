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
    import AnimatingFish from './components/AnimatingFish.svelte'

    let color1 = '#A9D8DB'
    let color2 = '#8FC9CF'
    let color3 = '#495F79'
    let color4 = '#242946'
    let color5 = '#000'

    let y

    let particlesUrl = 'http://foo.bar/particles.json'

    let particlesConfig = {
        fullScreen: false,
        zIndex: 100,
        particles: {
            number: {
                value: 40,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: '#ffffff',
            },
            shape: {
                character: [
                    {
                        fill: true,
                        value: ['0', '1'],
                        font: 'Verdana',
                        style: '',
                        weight: '400',
                    },
                ],
                stroke: {
                    width: 0,
                    color: '#000000',
                },
                polygon: {
                    nb_sides: 5,
                },
                image: {
                    src: 'img/github.svg',
                    width: 100,
                    height: 100,
                },
                type: 'char',
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 20,
                random: true,
                anim: {
                    enable: false,
                    speed: 80,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: false,
                distance: 300,
                color: '#ffffff',
                opacity: 0.4,
                width: 2,
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'top',
                random: false,
                straight: true,
                out_mode: 'out',
                bounce: false,
                vibrate: true,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: false,
                    mode: 'repulse',
                },
                onclick: {
                    enable: false,
                    mode: 'push',
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 800,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 800,
                    size: 40,
                    duration: 2,
                    opacity: 0.8,
                    speed: 1,
                },
                repulse: {
                    distance: 400,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
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

<!-- Matrix -->

<div
    class="hidden md:block absolute pointer-events-none top-0 w-full z-10 {y <
    1.5 * innerHeight
        ? 'md:hidden'
        : ''}"
>
    <Particles
        options={particlesConfig}
        on:particlesLoaded={onParticlesLoaded}
        {particlesInit}
    />
</div>

<div class="hidden md:block">
    <AnimatingFish />
</div>

<style lang="postcss" global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    span {
        position: absolute;
        font-size: 5vw;
        user-select: none;
    }

    #tsparticles {
        height: 680vh;
    }

    canvas {
        pointer-events: none !important;
    }
</style>
