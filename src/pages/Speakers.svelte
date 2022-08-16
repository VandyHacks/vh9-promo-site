<script>
    import DiveDeeper from '../components/DiveDeeper.svelte'
    export let y
</script>

<div class="flex relative h-screen w-full text-white">
    <div class="m-auto z-[1]">This is Speakers page {y} px</div>

    <DiveDeeper currentPage="speakers" />
</div>
