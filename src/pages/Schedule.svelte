<script>
    import DiveDeeper from '../components/DiveDeeper.svelte'
    export let y
</script>

<div id="custom-linear-gradient" class="flex relative h-screen w-full">
    <div class="m-auto z-[1]">This is Schedule page {y} px</div>
    <DiveDeeper currentPage="schedule" />
</div>

<style>
    #custom-linear-gradient {
        background: linear-gradient(
            to bottom,
            #a9d8db,
            #a9d8db 69%,
            #8fc9cf 70%,
            #8fc9cf 100%
        );
        background: -o-linear-gradient(
            to bottom,
            #a9d8db,
            #a9d8db 69%,
            #8fc9cf 70%,
            #8fc9cf 100%
        );
        background: -moz-linear-gradient(
            to bottom,
            #a9d8db,
            #a9d8db 69%,
            #8fc9cf 70%,
            #8fc9cf 100%
        );
        background: -webkit-linear-gradient(
            to bottom,
            #a9d8db,
            #a9d8db 69%,
            #8fc9cf 70%,
            #8fc9cf 100%
        );
    }
</style>
