<script>
    import Navbar from './components/Navbar.svelte'
    import Wave from './components/Wave.svelte'

    import Home from './pages/Home.svelte'
    import About from './pages/About.svelte'
    import Schedule from './pages/Schedule.svelte'
    import Speakers from './pages/Speakers.svelte'
    import Faq from './pages/Faq.svelte'
    import Sponsors from './pages/Sponsors.svelte'

    import MediaQuery from './MediaQuery.svelte'
    import Particles from 'svelte-particles'
    import { loadFull } from 'tsparticles'
    import { isAnimationOn } from './stores'
    import AnimatingFish from './components/AnimatingFish.svelte'

    let y

    let particlesConfig = {
        fullScreen: false,
        zIndex: 100,
        particles: {
            number: {
                value: 40,
                density: {
                    enable: true,
                    value_area: 600,
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
                        font: 'Futura',
                        style: '',
                        weight: '400',
                    },
                ],
                type: 'char',
            },
            opacity: {
                value: 0.5,
                random: true,
            },
            size: {
                value: 20,
                random: true,
            },
            move: {
                enable: true,
                direction: 'top',
                out_mode: 'out',
                speed: 1.5,
                random: false,
                straight: false,
                vibrate: false,
            },
        },
    }

    // let isChrome = Boolean(window.chrome)
    // isAnimationOn.set(isChrome)

    let particlesInit = async (engine) => {
        await loadFull(engine)
    }

    function toggleAnimation() {
        isAnimationOn.set(!$isAnimationOn)
    }

    $: innerHeight = 0
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />

<Home {y} />
<Navbar {y} />
<Wave />
<div
    class="relative bg-no-repeat bg-center bg-[length:100vw_500vh]"
    style="background-image: url(png/OceanBackground.png)"
>
    <About />
    <Schedule />
    <Speakers />
    <Faq />
    <Sponsors />
</div>

<!-- Animation -->
<MediaQuery query="(min-width: 769px)" let:matches>
    {#if matches && $isAnimationOn}
        {#if y > 1.4 * innerHeight}
            <div class="block absolute pointer-events-none top-0 w-full z-10">
                <Particles options={particlesConfig} {particlesInit} />
            </div>
            <div class="block">
                <AnimatingFish />
            </div>
        {/if}
    {/if}
</MediaQuery>

<MediaQuery query="(max-width: 768px)" let:matches>
    {#if matches}
        <div />
    {/if}
</MediaQuery>

<div class="invisible sm:visible fixed p-4 bottom-2 z-50 flex justify-center">
    <label
        for="default-toggle"
        class="inline-flex relative items-center cursor-pointer"
    >
        <input
            type="checkbox"
            value=""
            id="default-toggle"
            class="sr-only peer"
            on:click={toggleAnimation}
            checked={$isAnimationOn}
        />
        <div
            class="w-11 h-6 md:w-14 md:h-8 lg:w-16 lg:h-10
					after:h-5 after:w-5 md:after:h-6 md:after:w-6 lg:after:h-7 lg:after:w-7
					after:top-[2px] after:left-[2px] md:after:top-[4px] md:after:left-[4px] lg:after:left-[4px] lg:after:top-[6px]
					bg-[#8E8E8E] peer-focus:outline-none rounded-full 
					peer peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-[#26305D] 
					after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all"
        />
    </label>
    <div
        class="flex items-center ml-2 text-md md:text-lg lg:text-xl text-white"
    >
        Animations
    </div>
</div>

<style lang="postcss" global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    #tsparticles {
        height: 680vh;
    }

    canvas {
        pointer-events: none !important;
    }
</style>
