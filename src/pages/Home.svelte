<script>
    import DiveDeeper from '../components/DiveDeeper.svelte'
    import MainLogo from '../components/logos/MainLogo.svelte'
    import LogoInstagram from '../components/logos/LogoInstagram.svelte'
    import LogoYoutube from '../components/logos/LogoYoutube.svelte'
    import LogoGithub from '../components/logos/LogoGithub.svelte'
    import LogoDiscord from '../components/logos/LogoDiscord.svelte'
    import LogoTwitter from '../components/logos/LogoTwitter.svelte'
    import LogoFacebook from '../components/logos/LogoFacebook.svelte'
    import BeachDecor from '../components/BeachDecor.svelte'
    let applyText = 'Apply';
    let backgroundButton = '#6a4c15';
	
	function handleMouseOver(e) {
		applyText = 'Coming Soon!';
        backgroundButton = '#736D6D';
	}
	function handleMouseOut(e) {
		applyText = 'Apply';
        backgroundButton = '#6a4c15';
	}
</script>

<div
    class="h-screen w-screen fixed overflow-hidden"
    style="background-color: var(--beach-color);"
>
    <div class="h-screen flex" style="color: var(--beach-text);">
        <div class="flex flex-col justify-center content-center m-auto">
            <div
                class="w-32 sm:w-36 md:w-44 lg:w-52 xl:w-56 2xl:w-[10vw] place-self-center"
            >
                <MainLogo />
            </div>
            <div
                class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-4 pb-2 md:pt-6 md:pb-4"
            >
                VANDYHACKS IX
            </div>
            <div
                class="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-[1.5vw]"
                style="font-family: Futura;"
            >
                October 21 - 23 | Nashville, TN
            </div>
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- ADD IN APPLICATION LINK HERE WHEN AVAILABLE -->
            <a
                target="_blank"
                class="place-self-center"
            >
                <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <div
                    
                    class="text-white w-1000 md:w-32 lg:w-40 h-10 md:h-12 lg:h-14 text-xl md:text-2xl lg:text-3xl pt-1 lg:pt-2 mt-3 place-self-center drop-shadow-xl rounded-lg hover:cursor-pointer"
                    style="background-color:{backgroundButton}; var(--beach-text); font-family: Futura;"
                    on:mouseover={handleMouseOver} on:mouseout={handleMouseOut}
                >
                    {applyText}
                </div>
            </a>
            <div
                id=""
                class="flex justify-center items-center mt-4 space-x-3 md:space-x-6 lg:space-x-8"
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

    <div class="fixed items-center">
        <DiveDeeper currentPage="wave" />
    </div>
</div>
