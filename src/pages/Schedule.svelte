<script>
    import DiveDeeper from '../components/DiveDeeper.svelte'
    export let y
</script>

<div id="custom-linear-gradient" class="flex relative h-screen w-screen">
    <!-- <div class="absolute z-[1]">This is Schedule page {y} px</div> -->
    <div class="m-auto z-[1]">
        <div class="pb-4 md:pb-8 text-2xl md:text-4xl lg:text-6xl">
            Schedule
        </div>
        <div class="relative h-[65vh] w-auto px-4">
            <img
                class="h-[65vh] w-auto"
                src="/png/ScheduleNotebook.png"
                alt="Notebook"
            />
            <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%]"
            >
                Dates go here
            </div>
        </div>
    </div>
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
