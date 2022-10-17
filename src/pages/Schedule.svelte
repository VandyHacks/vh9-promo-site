<script>
    import DiveDeeper from '../components/DiveDeeper.svelte'
    import Papa from 'papaparse'

    let selectedDay = 1
    let schedules = [
        [
            {
                Event: 'Check-in',
                Location: '',
                Time: '5:30 PM - 8:00 PM',
            },
            {
                Event: 'Dinner',
                Location: 'ESB Lobby',
                Time: '6:00 PM - 8:00 PM',
            },
            {
                Event: 'Opening Ceremony',
                Location: 'SLC',
                Time: '8:00 PM - 9:00 PM',
            },
            {
                Event: 'Team Matching',
                Location: '',
                Time: '9:30 PM - 10:00 PM',
            },
            {
                Event: 'Hacking Begins!',
                Location: '',
                Time: '10:00 PM',
            },
            {
                Event: 'Introduction to Web Development',
                Location: 'ESB 044/048',
                Time: '10:00 PM - 11:00 PM',
            },
            {
                Event: 'Transformers and Applied ML',
                Location: 'ESB 044/048',
                Time: '11:00 PM - 12:00 AM',
            },
            {
                Event: "Midnight Snack (Jeni's Ice Cream)",
                Location: 'ESB Lobby',
                Time: '12:00 AM - 1:00 AM',
            },
            {
                Event: 'Containerization, Docker and Kubernetes',
                Location: 'ESB 044/048',
                Time: '12:00 AM - 1:00 AM',
            },
            {
                Event: 'Data Visualization',
                Location: 'ESB 044/048',
                Time: '1:00 AM - 2:00 AM',
            },
            {
                Event: 'Midnight Gaming',
                Location: 'ESB 044/048',
                Time: '3:00 AM - 4:00 AM',
            },
            {
                Event: "Breakfast (Jason's Deli)",
                Location: 'ESB Lobby',
                Time: '8:00 AM - 9:30 AM',
            },
        ],
        [
            {
                Event: 'Resin Pour',
                Location: 'ESB 044/048',
                Time: '9:00 AM - 10:00 AM',
            },
            {
                Event: 'Command Line Essentials',
                Location: 'ESB 044/048',
                Time: '9:00 AM - 9:30 AM',
            },
            {
                Event: 'Dynamic Programming',
                Location: 'ESB 044/048',
                Time: '9:30 AM - 10:00 AM',
            },
            {
                Event: 'Design & Deployment',
                Location: 'ESB 044/048',
                Time: '10:00 AM - 11:00 AM',
            },
            {
                Event: "It's On You: CS & Ethics",
                Location: 'ESB 044/048',
                Time: '11:00 AM - 12:00 PM',
            },
            {
                Event: 'Boat Building',
                Location: 'ESB 044/048',
                Time: '10:30 AM - 1:30 PM',
            },
            {
                Event: "Lunch (Inchin's)",
                Location: 'ESB Lobby',
                Time: '12:30 PM - 2:30 PM',
            },
            {
                Event: 'Kickball',
                Location: 'ESB 044/048',
                Time: '3:00 PM - 4:00 PM',
            },
            {
                Event: 'Watercolor Painting',
                Location: 'ESB 044/048',
                Time: '5:00 PM - 6:00 PM',
            },
            {
                Event: 'Dinner (Blue Coast Burrito)',
                Location: 'ESB Lobby',
                Time: '6:00 PM - 7:30 PM',
            },
            {
                Event: 'VR Event',
                Location: 'ESB 044/048',
                Time: '7:30 PM - 8:30 PM',
            },
            {
                Event: 'Swag Distribution',
                Location: 'ESB Lobby',
                Time: '8:00 PM - 10:00 PM',
            },
            {
                Event: 'Navigating CS Internships Panel',
                Location: 'ESB 044/048',
                Time: '9:00 PM - 10:00 PM',
            },
            {
                Event: 'Cookie Decorating',
                Location: 'ESB Lobby',
                Time: '10:00 PM - 11:00 PM',
            },
            {
                Event: 'Midnight Snack (Krispy Kreme)',
                Location: 'ESB Lobby',
                Time: '12:00 AM - 1:00 AM',
            },
            {
                Event: 'VR Station',
                Location: 'ESB 044/048',
                Time: '1:00 AM - 2:00 AM',
            },
        ],
        [
            {
                Event: "Breakfast (Jason's Deli)",
                Location: 'ESB Lobby',
                Time: '8:00 AM - 9:00 AM',
            },
            {
                Event: 'How to Demo',
                Location: 'ESB Lobby',
                Time: '9:00 AM - 10:00 AM',
            },
            {
                Event: 'Career Fair',
                Location: 'ESB Lobby',
                Time: '10:00 AM - 1:00 PM',
            },
            {
                Event: "Lunch (Jersey Mike's)",
                Location: 'ESB Lobby',
                Time: '11:30 AM - 1:00 PM',
            },
            {
                Event: 'Expo A',
                Location: 'ESB 044/048',
                Time: '10:00 AM - 11:00 AM',
            },
            {
                Event: 'Expo B',
                Location: 'ESB 044/048',
                Time: '11:30 AM - 12:30 PM',
            },
            {
                Event: 'Closing Ceremony',
                Location: 'Langford Auditorium',
                Time: '1:30 PM - 3:00 PM',
            },
        ],
    ]

    function getScheduleOfTheDay(day) {
        selectedDay = day

        // Reset scroll when changing page
        let scheduleBox = document.getElementById('scrollable-content')
        scheduleBox.scrollTop = 0
    }
</script>

<div class="flex relative h-screen w-screen">
    <div class="m-auto z-[1]">
        <div class="mb-24 text-2xl md:text-4xl lg:text-6xl">Schedule</div>
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
                            class="grid grid-cols-3 sm:grid-cols-4 divide-x-[1px] divide-black"
                        >
                            <div
                                class="col-span-2 sm:col-span-3 text-lg md:text-xl pb-3 pl-4"
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
                        {#each schedules[selectedDay - 1] as schedule}
                            <div
                                class="grid grid-cols-3 sm:grid-cols-4 divide-x-[1px] divide-black"
                            >
                                <div
                                    class="col-span-2 sm:col-span-3 py-2 pr-1 pl-4"
                                >
                                    <div
                                        class="text-sm font-bold md:text-lg lg:text-xl "
                                    >
                                        {schedule.Event}
                                    </div>
                                    <div
                                        class="text-xs font-thin italic md:text-lg lg:text-xl "
                                    >
                                        {schedule.Location}
                                    </div>
                                </div>
                                <div
                                    class="col-span-1 italic pl-4 pr-2 sm:pr-0 pt-2 text-sm md:text-lg lg:text-xl "
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
