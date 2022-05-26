<script>
    import { Router, Link, Route } from "svelte-routing";
    import Home from "../pages/Home.svelte";
    import About from "../pages/About.svelte";
    import Schedule from "../pages/Schedule.svelte";
    import Faq from "../pages/Faq.svelte";
    export let url="";
</script>

<Router url="{url}">
    <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="schedule">Schedule</Link>
        <Link to="faq">FAQ</Link>
    </nav>
    <div>
        <Route path="about" component="{About}" /> 
        <Route path="schedule" component="{Schedule}" /> 
        <Route path="faq" component="{Faq}" /> 
        <Route path="/"><Home /></Route>
    </div>
</Router>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        position: sticky;
        padding: 10px 5em;
        top: 0px;
    }
    nav {
        color: #4392D3;
    }
</style>