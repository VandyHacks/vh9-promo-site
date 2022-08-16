<script>
    import TreasureChest from '../components/svgs/TreasureChest.svelte'
    // export let y
</script>

<div class="flex relative h-screen w-full text-white">
    <div class="absolute bottom-[80px] left-[80px] z-20">
        <TreasureChest />
    </div>

    <div
        class="absolute mt-[50px] top left-1/2 transform -translate-x-1/2 z-10"
    >
        <div class="text-white text-2xl md:text-4xl lg:text-6xl">Sponsors</div>
    </div>
</div>
