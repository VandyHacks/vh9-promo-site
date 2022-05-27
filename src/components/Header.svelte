<script>
    import { Router, Link, Route } from "svelte-routing";
    export let y;

    function handleClick(page) {
        console.log("clicked to", page);
        window.scrollTo({
            top: 1000,
            left: 0,
            behavior: "smooth"
        });
    }
</script>

<div id="header">
    <Router>
        <Link to="about" class="headerLink" on:click={() => handleClick("about")}>About</Link>
        <Link to="schedule" class="headerLink" on:click={() => handleClick("schedule")}>Schedule</Link>
        <Link to="speakers" class="headerLink" on:click={() => handleClick("speakers")}>Speakers</Link>
        <Link to="faq" class="headerLink" on:click={() => handleClick("faq")}>FAQ</Link>
        <Link to="sponsors" class="headerLink" on:click={() => handleClick("sponsors")}>Sponsors</Link>
        <div class="headerLink"></div>
    </Router>
</div>

<style>
    #header {
        background-color: lightcoral;
        display: flex;
        justify-content: space-around;
        position: absolute;
        z-index: 1;
        width: 100%;
        padding: 30px 0;
    }

    .headerLink {
        font-weight: 400;
        font-size: 28px;
    }
</style>