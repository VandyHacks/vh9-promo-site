<script context="module">
    // import Summaries, { showSlide } from './Summaries.svelte'

    export let slideNumber = 0
    let slideMax = 2
    let sources = ['speakers/Dory.png', 'speakers/Nemo.png']
    let names = ['Dory', 'Nemo']

    export function navigatePotrait(isForward) {
        if (isForward) {
            slideNumber = (slideNumber + 1) % slideMax
        } else {
            slideNumber = (slideNumber - 1 + slideMax) % slideMax
        }
        document.getElementById('speaker').src = sources[slideNumber]
        document.getElementById('SpeakerName').innerHTML = names[slideNumber]
    }
</script>

<div class="md:w-[40vw] md:my-auto">
    <div
        class="flex items-center justify-center rounded-[50%] w-44 h-44 md:w-56 md:h-56 bg-white bg-opacity-60 mx-auto shadow-lg"
    >
        <div class="rounded-[50%] w-36 h-36 md:w-48 md:h-48 bg-cyan-300">
            <img
                id="speaker"
                class="w-full h-full"
                src={sources[slideNumber]}
                alt="Portrait of Speaker"
            />
        </div>
    </div>
    <div id="SpeakerName" class="py-4 text-3xl">{names[0]}</div>
</div>
