<script lang="ts">
    import { router } from '@inertiajs/svelte';
    import AppHead from '@/components/AppHead.svelte';
    import { Flame, Rocket, Search, Loader2, ShieldAlert, Cpu } from 'lucide-svelte';
    import { fade, fly, slide } from 'svelte/transition';

    let url = $state('');
    let isSubmitting = $state(false);
    let statusIndex = $state(0);

    const roastStatuses = [
        "SNIFFING_OUT_2014_TRENDS",
        "JUDGING_HERO_SECTION_EGO",
        "MEASURING_BOUNCE_RATE",
        "PREPARING_BURN_UNIT",
        "CONSULTING_UX_GODS"
    ];

    function handleSubmit() {
        if (!url) return;

        // Auto-prefix protocol if missing
        let processedUrl = url.trim();
        if (!/^https?:\/\//i.test(processedUrl)) {
            processedUrl = 'https://' + processedUrl;
        }
        
        // Update the bound variable so the UI reflects the change
        url = processedUrl;
        
        isSubmitting = true;

        const interval = setInterval(() => {
            if (!isSubmitting) clearInterval(interval);
            statusIndex = (statusIndex + 1) % roastStatuses.length;
        }, 2000);

        // Send the processed URL
        router.post('/roast/guest', { url: processedUrl }, {
            onFinish: () => {
                isSubmitting = false;
                clearInterval(interval);
            },
            onError: (errors) => {
                console.error("SYS_ERR:", errors);
                isSubmitting = false;
            }
        });
    }
</script>

<AppHead title="Project Scorch | Roast My Website" />

<div class="min-h-screen bg-scorch-black bg-[#050505] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
    
    <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-red-900/10 blur-[140px] rounded-full animate-pulse"></div>
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
    </div>

    <div class="max-w-xl w-full relative z-10">
        
        <div class="text-center mb-12" in:fly={{ y: -20, duration: 800 }}>
            <div class="inline-flex relative group mb-6">
                <div class="absolute -inset-1 bg-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div class="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-zinc-900 border border-white/10 text-red-600 shadow-2xl">
                    <Flame size={40} />
                </div>
            </div>
            
            <h1 class="text-5xl font-black tracking-tighter uppercase italic leading-none mb-4">
                Enter the <span class="text-red-600">Scorcher</span>
            </h1>
            <p class="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">
                System Status: <span class="text-green-500 animate-pulse">Aggressive_AI_Online</span>
            </p>
        </div>

        <div class="relative group" in:scale={{ start: 0.95, duration: 800 }}>
            <div class="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-zinc-800 rounded-3xl blur opacity-20 group-focus-within:opacity-50 transition duration-500"></div>
            
            <form on:submit|preventDefault={handleSubmit} class="relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-2 rounded-[28px] shadow-2xl">
                <div class="flex flex-col md:flex-row gap-2">
                    <div class="relative flex-grow">
                        <div class="absolute inset-y-0 left-5 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-red-500 transition-colors">
                            <Search size={20} />
                        </div>
                        <input
                            type="url"
                            required
                            placeholder="https://your-painful-url.com"
                            bind:value={url}
                            class="block w-full pl-14 pr-6 py-6 bg-transparent text-white placeholder-zinc-700 rounded-2xl border-none focus:ring-0 text-lg transition-all outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting || !url}
                        class="px-8 py-5 bg-red-600 hover:bg-red-500 text-white font-black uppercase italic tracking-tighter rounded-2xl transition-all active:scale-95 disabled:bg-zinc-800 disabled:text-zinc-600 flex items-center justify-center gap-3 overflow-hidden group/btn relative"
                    >
                        {#if isSubmitting}
                            <Loader2 size={20} class="animate-spin" />
                            <span>Processing...</span>
                        {:else}
                            <span class="relative z-10 flex items-center gap-2">
                                BURN IT <Rocket size={20} class="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </span>
                        {/if}
                    </button>
                </div>
            </form>
        </div>

        {#if isSubmitting}
            <div class="mt-8 flex flex-col items-center gap-4" in:slide>
                <div class="flex gap-2">
                    {#each Array(3) as _, i}
                        <div 
                            class="w-2 h-2 rounded-full bg-red-600 animate-bounce" 
                            style="animation-delay: {i * 0.1}s"
                        ></div>
                    {/each}
                </div>
                <div class="bg-red-600/5 border border-red-600/20 px-4 py-2 rounded-full">
                    <p class="text-[10px] font-mono text-red-500 uppercase tracking-widest flex items-center gap-3">
                        <Cpu size={12} class="animate-spin" />
                        {roastStatuses[statusIndex]}
                    </p>
                </div>
            </div>
        {/if}

        <div class="mt-12 flex items-center justify-center gap-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div class="flex items-center gap-2 text-[10px] font-mono text-zinc-400">
                <ShieldAlert size={14} /> NO_PROFANITY_MODE
            </div>
            <div class="w-1 h-1 rounded-full bg-zinc-800"></div>
            <div class="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                © Project_Scorch_v2
            </div>
        </div>

        <p class="mt-8 text-center text-[10px] text-zinc-600 uppercase tracking-tighter">
            * By proceeding, you agree to digital humiliation for the sake of better UI.
        </p>
    </div>
</div>

<style>
    /* Add a subtle scanline or noise effect */
    .bg-scorch-black::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                    linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
        background-size: 100% 2px, 3px 100%;
        pointer-events: none;
        z-index: 50;
        opacity: 0.1;
    }
</style>