<script>
    import { Router, Link } from "svelte-routing";
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    export let y;
    export let innerHeight;
    let pageOrder = { "about": 1, "schedule": 2, "speakers": 3, "faq": 4, "sponsors": 5 };

    // Navigate to section specified by page url, if available. Otherwise, remain at the top. 
    onMount(() => {
        let url = window.location.href;
        let page = url.split("/")[3].toLocaleLowerCase();
        navigateTo(pageOrder[page]);
    });

    function navigateTo(target) {
        setTimeout(() => {
            window.scrollTo({
            top: innerHeight * target,
            left: 0,
            behavior: "smooth"
        });
        }, 250);
    }
</script>

<div id="navbar-top">
    <Router>
        <Link to="about" class="navbarLink" on:click={() => navigateTo(pageOrder["about"])}>About</Link>
        <Link to="schedule" class="navbarLink" on:click={() => navigateTo(pageOrder["schedule"])}>Schedule</Link>
        <Link to="speakers" class="navbarLink" on:click={() => navigateTo(pageOrder["speakers"])}>Speakers</Link>
        <Link to="faq" class="navbarLink" on:click={() => navigateTo(pageOrder["faq"])}>FAQ</Link>
        <Link to="sponsors" class="navbarLink" on:click={() => navigateTo(pageOrder["sponsors"])}>Sponsors</Link>
        <div class="navbarLink"></div>
    </Router>
</div>

{#if y >= innerHeight / 2}
<div id="navbar-side" transition:fade>
    <div id="test">
        <div class="center">Submarine buddy goes here</div>
    </div>
</div>
{/if}

<style>
    #navbar-top {
        background-color: lightcoral;
        display: flex;
        justify-content: space-around;
        position: absolute;
        z-index: 1;
        width: 100%;
        padding: 30px 0;
    }

    .navbarLink {
        font-weight: 400;
        font-size: 28px;
    }

    #navbar-side {
        position: fixed;
        width: 5vw;
        min-width: 80px;
        height: 100vh;
        z-index: 1;
        left: 0;
    }

    #test {
        position: absolute;
        background-color: aquamarine;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 50%;
    }
</style>