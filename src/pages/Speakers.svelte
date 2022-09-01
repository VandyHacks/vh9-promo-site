<script>
    import DiveDeeper from '../components/DiveDeeper.svelte'
    import Summaries from '../components/svgs/Summaries.svelte'
    import SpeakerPortrait from '../components/svgs/SpeakerPortrait.svelte'

    let slideNumber = 0
</script>

<div class="flex relative h-screen w-full text-white">
    <div class="m-auto z-[1]">
        <div class="text-2xl md:text-4xl lg:text-6xl">Speakers</div>
        <div class="w-full py-10 font-['Futura'] flex flex-col md:flex-row">
            <SpeakerPortrait bind:slideNumber />

            <Summaries bind:slideNumber />
        </div>
    </div>
    <DiveDeeper currentPage="speakers" />
</div>
