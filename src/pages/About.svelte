<script>
    import DiveDeeper from '../components/DiveDeeper.svelte'
</script>

<div class="flex relative h-screen w-full">
    <div class="m-auto">
        <div class="text-2xl md:text-4xl lg:text-6xl">About</div>
        <div
            class="font-['Futura'] text-justify indent-[50px] my-0 mx-10 md:mx-48 lg:mx-56 mt-[3%] text-md md:text-lg lg:text-xl xl:text-2xl"
        >
            VandyHacks is Vanderbilt's student-run hackathon, where participants
            from all over the world create innovative projects over the course
            of 36 hours. This year, our hackathon will be a fully in-person
            event on October 21st-23rd. Hackers can come together to attend
            skill workshops, network with sponsors, and win cool prizes!
        </div>
    </div>

    <DiveDeeper currentPage="about" />
</div>
