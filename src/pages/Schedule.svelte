<script>
    import DiveDeeper from '../components/DiveDeeper.svelte'
    import Papa from 'papaparse'

    let selectedDay = 1
    let schedules = []
    let scheduleOfTheDay = ''
    export let y

    for (let i = 0; i < 3; i++) {
        Papa.parse(`./schedule/Day${i + 1}.csv`, {
            download: true,
            header: true,
            complete: function (results) {
                schedules[i] = results.data
                if (i == 0) {
                    scheduleOfTheDay = schedules[i]
                }
            },
        })
    }

    function getScheduleOfTheDay(day) {
        selectedDay = day
        scheduleOfTheDay = schedules[day - 1]
    }
</script>

<div id="custom-linear-gradient" class="flex relative h-screen w-full">
    <BookAndButtons />
    <div class="absolute top-[180px] left-1/2 transform -translate-x-1/2 z-10">
        <div class="text-2xl md:text-4xl lg:text-6xl">Schedule</div>
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
