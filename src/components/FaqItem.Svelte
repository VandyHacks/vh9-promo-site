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

<div on:click={toggle} class="noselect">
    <li class="outer-list font-inter" style="background-image:url('{icon}');">
        <div class="cursor-pointer text-2xl">
            {question}
        </div>
    </li>
    {#if expanded}
        <ul class="inner-list font-inter text-lg">
            <li class="answer">{answer}</li>
        </ul>
    {/if}
</div>

<style>
    .outer-list {
        margin: 0;
        padding: 16px 0 16px 34px;
        list-style: none;
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 20px;
        font-size: 36px;
    }

    .inner-list {
        list-style: none inside;
        padding-left: 1em;
        font-size: 0.7em;
    }

    .answer {
        padding: 1.25rem 1.25rem 0 1.25rem;
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
