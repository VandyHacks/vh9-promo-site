<script>
    import DiveDeeper from '../components/DiveDeeper.svelte'
    export let y
</script>

<div
    class="flex relative h-screen w-full text-white bg-gradient-to-b from-[#8fc9cf] to-[#5f8094]"
>
    <div class="m-auto z-[1]">This is Speakers page {y} px</div>

    <DiveDeeper currentPage="speakers" />
</div>
