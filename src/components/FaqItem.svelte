<script>
    export let question
    export let answer

    let expanded = false
    let icon = 'png/downTriangle.png'

    function toggle() {
        expanded = !expanded
        if (expanded) {
            icon = 'png/upTriangle.png'
        } else {
            icon = 'png/downTriangle.png'
        }
    }
</script>

<div on:click={toggle} class="noselect font-['Futura']">
    <li
        class="outer-list list-none m-0 py-2 pl-7 font-inter"
        style="background-image:url('{icon}');"
    >
        <div class="cursor-pointer text-sm md:text-lg lg:text-xl xl:text-2xl">
            {question}
        </div>
    </li>
    {#if expanded}
        <ul class="list-none pl-6 font-inter">
            <li class="text-sm lg:text-lg xl:text-xl">{answer}</li>
        </ul>
    {/if}
</div>

<style>
    .outer-list {
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 16px;
    }

    .noselect {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
</style>
