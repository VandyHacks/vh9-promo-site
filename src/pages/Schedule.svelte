<script>
    import DiveDeeper from '../components/DiveDeeper.svelte'
    import Papa from 'papaparse'

    let selectedDay = 1
    let schedules = []
    let scheduleOfTheDay = ''

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

        // Reset scroll when changing page
        let scheduleBox = document.getElementById('scrollable-content')
        scheduleBox.scrollTop = 0
    }
</script>

<div class="flex relative h-screen w-screen">
    <div class="m-auto z-[1]">
        <div class="pb-16 text-2xl md:text-4xl lg:text-6xl">Schedule</div>
        <div class="relative h-[65vh] w-auto px-4 font-['Futura']">
            <!-- Navigate between pages -->
            <div
                class="absolute flex flex-row space-x-4 -top-14 right-1/2 translate-x-1/2 md:right-[10%] md:translate-x-0"
            >
                <div
                    class="w-14 sm:w-20 md:w-28 {selectedDay == 1
                        ? 'bg-[#DAEEF1]'
                        : 'bg-[#BFE6E1]'} pb-10 pt-1 hover:cursor-pointer"
                    on:click={() => getScheduleOfTheDay(1)}
                >
                    <div class="text-sm md:text-lg">Oct 21</div>
                    <div class="text-sm md:text-lg">Friday</div>
                </div>
                <div
                    class="w-14 sm:w-20 md:w-28 {selectedDay == 2
                        ? 'bg-[#DAEEF1]'
                        : 'bg-[#BFE6E1]'} pb-10 pt-1 hover:cursor-pointer"
                    on:click={() => getScheduleOfTheDay(2)}
                >
                    <div class="text-sm md:text-lg">Oct 22</div>
                    <div class="text-sm md:text-lg">Saturday</div>
                </div>
                <div
                    class="w-14 sm:w-20 md:w-28  {selectedDay == 3
                        ? 'bg-[#DAEEF1]'
                        : 'bg-[#BFE6E1]'} pb-10 pt-1 hover:cursor-pointer"
                    on:click={() => getScheduleOfTheDay(3)}
                >
                    <div class="text-sm md:text-lg">Oct 23</div>
                    <div class="text-sm md:text-lg">Sunday</div>
                </div>
            </div>

            <!-- Notebook png -->
            <img
                class="relative h-[65vh] w-auto"
                src="/png/ScheduleNotebook.png"
                alt="Notebook"
            />

            <!-- Schedule -->
            <div
                id="scrollable-content"
                class="absolute overflow-y-scroll top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] md:px-10"
            >
                <div
                    class="grid grid-rows-7 divide-y-[1px] divide-black text-left"
                >
                    <!-- Title -->
                    <div class="row-span-1">
                        <div
                            class="grid grid-cols-4 divide-x-[1px] divide-black"
                        >
                            <div
                                class="col-span-3 text-lg md:text-xl pb-3 pl-4"
                            >
                                Event
                            </div>
                            <div
                                class="col-span-1 text-lg md:text-xl pb-3 pl-4"
                            >
                                Time
                            </div>
                        </div>
                    </div>
                    <!-- Schedule -->
                    <div class="row-span-6">
                        {#each scheduleOfTheDay as schedule}
                            <div
                                class="grid grid-cols-4 divide-x-[1px] divide-black"
                            >
                                <div class="col-span-3 py-2 pl-4">
                                    <div class="text-sm md:text-lg lg:text-xl ">
                                        {schedule.Event}
                                    </div>
                                    <div class="text-sm md:text-lg lg:text-xl ">
                                        {schedule.Location}
                                    </div>
                                </div>
                                <div
                                    class="col-span-1 italic pl-4 pt-2 text-sm md:text-lg lg:text-xl "
                                >
                                    {schedule.Time}
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <DiveDeeper currentPage="schedule" />
</div>

<style>
    #scrollable-content::-webkit-scrollbar {
        width: 10px;
    }
    #scrollable-content::-webkit-scrollbar * {
        background: transparent;
        border-radius: 10px;
    }
    #scrollable-content::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgba(255, 0, 0, 0.1) !important;
    }
</style>
