<script context="module">
    import { navigatePotrait } from './SpeakerPortrait.svelte'

    let summaries = [
        'Exciting speaker series coming to you soon! Stay tuned.',
        "We won't actually have Nemo as our speaker, but we have speakers as exciting as Nemo!",
        // 'TBD',
        // 'TBD',
    ]
    export let slideNumber = 0
    let slideMax = 2

    function navigateSummary(isForward) {
        if (isForward) {
            slideNumber = (slideNumber + 1) % slideMax
        } else {
            slideNumber = (slideNumber - 1 + slideMax) % slideMax
        }
        document.getElementById('summary').innerHTML = summaries[slideNumber]
        navigatePotrait(isForward)
    }
</script>

<div class="flex flex-row w-fit md:w-[50vw] mx-auto">
    <button
        class="relative mr-5 rotate-180"
        on:click={() => navigateSummary(false)}
    >
        <svg
            z-index="20"
            width="29"
            height="51"
            viewBox="0 0 29 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 48L26 25.5L3 3"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </button>
    <div
        class="relative h-[50vh] lg:h-[60vh] bg-opacity-40 bg-white w-[70vw] md:w-[60vw] lg:w-[45vw] rounded-lg"
    >
        <div
            class="font-['Futura'] text-justify overflow-scroll h-full w-full px-3 md:px-6 lg:px-10 py-5 text-sm md:text-md lg:text-lg xl:text-xl"
            id="summary"
        >
            {summaries[0]}
        </div>
    </div>
    <button class="relative ml-5" on:click={() => navigateSummary(true)}>
        <svg
            z-index="20"
            width="29"
            height="51"
            viewBox="0 0 29 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 48L26 25.5L3 3"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </button>
</div>

<style>
    #summary::-webkit-scrollbar {
        width: 10px;
    }
    #summary::-webkit-scrollbar * {
        background: transparent;
        border-radius: 10px;
    }
    #summary::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgba(255, 0, 0, 0.1) !important;
    }
</style>
