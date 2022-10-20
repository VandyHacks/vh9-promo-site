<script>
    import TreasureChest from '../components/TreasureChest.svelte'

    export let sponsors = [
        {
            title: 'Capital One',
            image: 'sponsors/capital_one_logo.png',
            link: 'https://campus.capitalone.com/',
        },
        {
            title: 'RStudio',
            image: 'sponsors/rstudio_logo.png',
            link: 'https://www.rstudio.com/',
        },
        {
            title: 'L3Harris',
            image: 'sponsors/l3harris_logo.png',
            link: 'https://www.l3harris.com/',
        },
        {
            title: 'Alliance Bernstein',
            image: 'sponsors/alliance_bernstein_logo.png',
            link: 'https://www.alliancebernstein.com/corporate/en/home.html',
        },
        {
            title: 'Iron Galaxy Studios',
            image: 'sponsors/iron_galaxy_logo.png',
            link: 'https://irongalaxystudios.com/',
        },
        {
            title: 'Seven Capital Management (SCM)',
            image: 'sponsors/scm_logo.png',
            link: 'https://www.scm-lp.com/',
        },
        {
            title: 'Google Cloud',
            image: 'sponsors/google_cloud_logo.png',
            link: 'https://cloud.google.com/',
        },
        {
            title: 'Phosphorus',
            image: 'sponsors/phosphorus_logo.png',
            link: 'https://phosphorus.io/',
        },
        {
            title: 'Echo 3D',
            image: 'sponsors/echo3d_logo.png',
            link: 'https://echo3d.co/',
        },
    ]
</script>

<div class="flex relative h-screen w-full text-white">
    <div class="absolute bottom-[80px] left-[80px]">
        <TreasureChest />
    </div>

    <div
        class="absolute mt-[50px] top left-1/2 transform -translate-x-1/2 z-10"
    >
        <div class="text-white text-2xl md:text-4xl lg:text-6xl">Sponsors</div>
        <div
            class={`font-['Futura'] grid gap-x-8 md:gap-x-60 gap-y-8 grid-cols-2 md:grid-cols-3 m-auto  justify-items-center ${
                !sponsors ? 'mt-[50%]' : 'mt-[5%]'
            } text-md md:text-lg lg:text-xl xl:text-2xl`}
        >
            {#each sponsors as sponsor}
                <div
                    onclick={`window.open('${sponsor.link}', 'mywindow');`}
                    class={`cursor-pointer bg-center w-[100px] md:w-[200px] mx-36 h-[50px] md:h-[100px] bg-white border-8 hover:scale-125 border-white rounded-md bg-contain bg-no-repeat`}
                    style={`background-image: url(${sponsor.image})`}
                />
            {/each}
        </div>
    </div>

    <div class="absolute bottom-[5px] left-[20px] z-20 font-['Futura'] text-sm">
        Made with &lt;3 by the VandyHacks team
    </div>
</div>
