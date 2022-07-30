<script>
    import DiveDeeper from '../components/DiveDeeper.svelte'
    export let y
</script>

<div
    class="flex relative h-screen w-full text-white bg-gradient-to-b from-[#5f8094] to-[#2a3053]"
>
    <div class="m-auto z-[1]">
        This is FAQ page {y} px
    </div>
    <DiveDeeper currentPage="faq" />
</div>
