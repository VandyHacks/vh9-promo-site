<script>
    import DiveDeeper from '../components/DiveDeeper.svelte'
    export let y
</script>

<div id="faq" class="flex items-center justify-center h-screen">
    <div class="text-container z-[1]">
        This is FAQ page {y} px
    </div>
    <DiveDeeper currentPage="faq" />
</div>

<style>
    #faq {
        background: linear-gradient(to bottom, #5f8094, #2a3053 100%);
        background: -o-linear-gradient(to bottom, #5f8094, #2a3053 100%);
        background: -moz-linear-gradient(to bottom, #5f8094, #2a3053 100%);
        background: -webkit-linear-gradient(to bottom, #5f8094, #2a3053 100%);
        position: relative;
        color: white;
    }
</style>
