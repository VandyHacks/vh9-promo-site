<script context="module">
    import { get } from 'svelte/store'
    import { isNavbarOpen } from '../stores.js'
    export function navigateTo(pageOrderNumber = 0) {
        setTimeout(() => {
            isNavbarOpen.set(false)
            window.scrollTo({
                top: get(innerHeightVal) * pageOrderNumber,
                left: 0,
                behavior: 'smooth',
            })
        }, 150)
    }
</script>

<script>
    import { Router, Link } from 'svelte-routing'
    import { onMount } from 'svelte'
    import { fade, fly } from 'svelte/transition'
    import { pageOrder, innerHeightVal } from '../stores.js'
    import MediaQuery from '../MediaQuery.svelte'
    import Hamburger from '../components/svgs/Hamburger.svelte'
    import CrossCircle from '../components/svgs/CrossCircle.svelte'
    export let y

    // Navigate to section specified by page url, if available. Otherwise, remain at the top.
    onMount(() => {
        let url = window.location.href
        let page = url.split('/')[3].toLocaleLowerCase()
        if ($pageOrder[page]) navigateTo($pageOrder[page])
    })

    function openNavbar() {
        isNavbarOpen.set(true)
    }

    function closeNavbar() {
        isNavbarOpen.set(false)
    }
</script>

<!-- Default -->
<MediaQuery query="(min-width: 769px)" let:matches>
    {#if matches}
        <div
            id="navbar-top"
            class="flex justify-evenly fixed w-screen p-10"
            style="color: var(--beach-text);"
        >
            <Router>
                <Link
                    to="about"
                    class="text-3xl"
                    on:click={() => navigateTo($pageOrder['about'])}>About</Link
                >
                <Link
                    to="schedule"
                    class="text-3xl"
                    on:click={() => navigateTo($pageOrder['schedule'])}
                    >Schedule</Link
                >
                <Link
                    to="speakers"
                    class="text-3xl"
                    on:click={() => navigateTo($pageOrder['speakers'])}
                    >Speakers</Link
                >
                <Link
                    to="faq"
                    class="text-3xl"
                    on:click={() => navigateTo($pageOrder['faq'])}>FAQ</Link
                >
                <Link
                    to="sponsors"
                    class="text-3xl"
                    on:click={() => navigateTo($pageOrder['sponsors'])}
                    >Sponsors</Link
                >
                <div />
                <a
                    id="mlh-trust-badge"
                    style="display:block;max-width:100px;min-width:60px;position:absolute;top:0px;right:3vw;width:10%;z-index:10000"
                    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=black"
                    target="_blank"
                >
                    <img
                        src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-black.svg"
                        alt="Major League Hacking 2023 Hackathon Season"
                        style="width:90%"
                    />
                </a>
            </Router>
        </div>

        {#if y >= $innerHeightVal / 2}
            <div class="fixed w-28 h-screen z-10" transition:fade>
                <div id="submarine-container" class="absolute h-[50%]">
                    <div>Submarine buddy goes here</div>
                </div>
            </div>
        {/if}
    {/if}
</MediaQuery>

<!-- Mobile -->
<MediaQuery query="(max-width: 768px)" let:matches>
    {#if matches}
        <div id="hamburger" on:click={openNavbar}>
            <Hamburger />
        </div>
        {#if $isNavbarOpen}
            <div id="navbar-mobile" transition:fly={{ duration: 200, x: -200 }}>
                <div id="close-button" on:click={closeNavbar}>
                    <CrossCircle />
                </div>
                <div id="navbar-mobile-container">
                    <Router>
                        <Link
                            to="about"
                            on:click={() => navigateTo($pageOrder['about'])}
                            >About</Link
                        >
                        <Link
                            to="schedule"
                            on:click={() => navigateTo($pageOrder['schedule'])}
                            >Schedule</Link
                        >
                        <Link
                            to="speakers"
                            on:click={() => navigateTo($pageOrder['speakers'])}
                            >Speakers</Link
                        >
                        <Link
                            to="faq"
                            on:click={() => navigateTo($pageOrder['faq'])}
                            >FAQ</Link
                        >
                        <Link
                            to="sponsors"
                            on:click={() => navigateTo($pageOrder['sponsors'])}
                            >Sponsors</Link
                        >
                        <div />
                    </Router>
                </div>
            </div>
        {/if}
        <a
            id="mlh-trust-badge"
            style="display:block;max-width:100px;min-width:60px;position:absolute;top:0px;right:30px;width:80px;z-index:10000"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=black"
            target="_blank"
        >
            <img
                src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-black.svg"
                alt="Major League Hacking 2023 Hackathon Season"
                style="width:90%"
            />
        </a>
    {/if}
</MediaQuery>

<style>
    #submarine-container {
        border: 5px solid aquamarine;
        /* top: 50%;
		transform: translateY(-50%); */
    }

    #hamburger {
        position: fixed;
        z-index: 1;
        top: 30px;
        left: 30px;
    }

    #navbar-mobile {
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        width: 60vw;
        height: 100%;
        background-color: white;
        border-radius: 5px;
        box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.2);
    }

    #navbar-mobile-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 100px 0 0 30px;
        font-size: 28px;
        text-align: start;
        color: black;
    }

    #close-button {
        position: absolute;
        top: 30px;
        right: 20px;
        transform: scale(1.5);
    }
</style>
