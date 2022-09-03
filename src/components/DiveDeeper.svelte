<script>
    import { pageOrder } from '../stores.js'
    import { navigateTo } from './Navbar.svelte'
    import { isAnimationOn } from '../stores.js'
    export let currentPage
</script>

<div
    class="hidden md:flex absolute w-screen justify-center bottom-0 z-10 text-white font-sans"
>
    <div
        class="flex flex-col items-center {$isAnimationOn
            ? 'animate-bounce -mb-5'
            : ''}"
    >
        <div
            class="text-xl md:text-2xl lg:text-3xl tracking-widest hover:cursor-pointer"
            on:click={navigateTo($pageOrder[currentPage] + 1)}
        >
            Dive Deeper
        </div>
        <!-- Downward Arrow -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
            />
        </svg>
    </div>
</div>
