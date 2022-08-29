<script>
    import DiveDeeper from '../components/DiveDeeper.svelte'
    import Summaries from '../components/svgs/Summaries.svelte'
    import Speakers from '../components/svgs/Speakers.svelte'
    import Rothschild from '../components/svgs/Rothschild.svelte'

    import { Splide, SplideSlide } from '@splidejs/svelte-splide'
    import '@splidejs/svelte-splide/css'

    let summary = ['summary 1', 'summary 2', 'summary 3', 'summary 4']
</script>

<div class="h-screen w-full text-white">
    <Rothschild />
    <Speakers />
    <Summaries class="row-span-2" />
    <DiveDeeper currentPage="speakers" />
</div>
