<script>
    import DiveDeeper from '../components/DiveDeeper.svelte'
    import LightSource from '../components/svgs/LightSource.svelte'
    export let y
</script>

<div
    class="flex relative h-screen w-full bg-gradient-to-b from-[#eafdff] to-[#b6dfe2]"
>
    <LightSource />
    <div class="m-auto">
        <div class="text-2xl md:text-4xl lg:text-6xl">About</div>
        <div
            class="font-['Futura'] text-justify indent-[50px] my-0 mx-[20%] mt-[3%] text-sm md:text-md lg:text-lg xl:text-2xl"
        >
            VandyHacks is Vanderbilt's student-run hackathon, where participants
            from all over the world create innovative projects over the course
            of 36 hours. This year, our hackathon will be a hybrid event on
            October 8th-10th. Virtual and in-person hackers can come together to
            attend skill workshops, network with sponsors, and win cool prizes.
        </div>
    </div>

    <DiveDeeper currentPage="about" />
</div>
