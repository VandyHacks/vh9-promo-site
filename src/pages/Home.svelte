<script>
    import DiveDeeper from '../components/DiveDeeper.svelte'
    import MainLogo from '../components/svgs/MainLogo.svelte'
    import { isAnimationOn } from '../stores.js'
    import LogoInstagram from '../components/svgs/Logos/LogoInstagram.svelte'
    import LogoYoutube from '../components/svgs/Logos/LogoYoutube.svelte'
    import LogoGithub from '../components/svgs/Logos/LogoGithub.svelte'
    import LogoDiscord from '../components/svgs/Logos/LogoDiscord.svelte'
    import LogoTwitter from '../components/svgs/Logos/LogoTwitter.svelte'
    import LogoFacebook from '../components/svgs/Logos/LogoFacebook.svelte'
    import BeachDecor from '../components/svgs/BeachDecor.svelte'
    export let y

    function toggleAnimation() {
        isAnimationOn.set(!$isAnimationOn)
    }
</script>

<div
    id="home"
    class="h-screen w-screen relative"
    style="background-color: var(--beach-color);"
>
    <div class="h-screen flex" style="color: var(--beach-text);">
        <div class="flex flex-col justify-center content-center m-auto">
            <div class="w-32 sm:w-44 md:w-56 lg:w-60 place-self-center">
                <MainLogo />
            </div>
            <div
                class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-8 pb-2 md:pt-10 md:pb-4"
            >
                VANDYHACKS IX
            </div>
            <div
                class="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                style="font-family: Futura;"
            >
                October 21 - 23 | Nashville, TN
            </div>
            <div
                class="text-white w-32 md:w-44 lg:w-52 h-10 md:h-14 lg:h-16 text-2xl md:text-3xl lg:text-4xl pt-1 lg:pt-2 mt-5 place-self-center drop-shadow-xl rounded-lg hover:cursor-pointer"
                style="background-color: var(--beach-text); font-family: Futura;"
            >
                Apply
            </div>
            <div
                id=""
                class="flex justify-center items-center mt-8 space-x-3 md:space-x-6 lg:space-x-8"
            >
                <LogoInstagram />
                <LogoYoutube />
                <LogoGithub />
                <LogoDiscord />
                <LogoTwitter />
                <LogoFacebook />
            </div>
        </div>
    </div>

    <div class="absolute w-1/3 h-3/4 top-20 left-10">
        <BeachDecor />
    </div>

    <div class="absolute p-4 bottom-0 z-10 flex justify-center">
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
            class="flex items-center invisible sm:visible ml-2 text-md md:text-lg lg:text-xl text-white"
        >
            Animations
        </div>
    </div>

    <DiveDeeper currentPage="home" />
</div>
