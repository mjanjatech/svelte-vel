<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import AppHead from '@/components/AppHead.svelte';
    import { Flame, Lock, Terminal, ChevronRight, Monitor, Download, ShieldAlert } from 'lucide-svelte';
    import { Link } from '@inertiajs/svelte';
    import { fade, slide, fly } from 'svelte/transition';
    import { marked } from 'marked';
    import DOMPurify from 'dompurify';

    let { critique }: { critique: any } = $props();
    
    // State Management
    let isFinished = $state(false);      
    let isTypingComplete = $state(false); 
    let fullTextData = $state('');       
    let displayedText = $state('');      
    let logs = $state(["SYS_INIT: Neural burn module active", "REVERB_LINK: Establishing..."]);

    let typeInterval: ReturnType<typeof setInterval>;
    const typingSpeed = 12; 

    // Extract the "Verdict" for Twitter sharing using Regex
    const punchline = $derived.by(() => {
        if (!fullTextData) return "My website just got roasted by Project Scorch.";
        const match = fullTextData.match(/### THE VERDICT\s*([\s\S]*)/i);
        return match ? match[1].trim() : "I survived the Scorch audit.";
    });

    const renderedRoast = $derived.by(() => {
        if (!displayedText) return '';
        const html = marked.parse(displayedText, { breaks: true }) as string;
        return DOMPurify.sanitize(html);
    });

    function startTypewriter(text: string) {
        let i = 0;
        isFinished = true;
        typeInterval = setInterval(() => {
            if (i < text.length) {
                displayedText += text.charAt(i);
                i++;
                const container = document.getElementById('roast-container');
                if (container) container.scrollTop = container.scrollHeight;
            } else {
                clearInterval(typeInterval);
                isTypingComplete = true;
                logs = [...logs, "STATUS: Roast complete.", "IO: PDF manifest ready."];
            }
        }, typingSpeed);
    }

    async function downloadPDF() {
        const html2pdf = (await import('html2pdf.js')).default;
        const element = document.getElementById('report-content');
        const printHeader = document.getElementById('pdf-print-header');
        
        if (printHeader) printHeader.style.display = 'block';

        const opt = {
            margin: [10, 10, 10, 10],
            filename: `SCORCH_REPORT_${critique.id}.pdf`,
            image: { type: 'jpeg', quality: 1.0 },
            html2canvas: { scale: 3, useCORS: true, backgroundColor: '#050505' },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        try {
            await html2pdf().set(opt).from(element).save();
        } finally {
            if (printHeader) printHeader.style.display = 'none';
        }
    }

    function shareToTwitter() {
        const tweetText = encodeURIComponent(`" ${punchline} "\n\nGet roasted:`);
        const tweetUrl = encodeURIComponent(window.location.href);
        window.open(`https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`, '_blank');
    }

    onMount(() => {
        if (window.Echo) {
            window.Echo.channel(`roasts.${critique.id}`)
                .listen('RoastCompleted', (e: any) => {
                    logs = [...logs, "DATA_RECV: Payload decrypted", "STATUS: Initiating Burn..."];
                    fullTextData = e.roastData;
                    setTimeout(() => startTypewriter(fullTextData), 800);
                });
        }
    });

    onDestroy(() => clearInterval(typeInterval));
</script>

<AppHead title={isFinished ? "Verdict Rendered" : "Analyzing Crimes..."} />

<div class="min-h-screen bg-[#050505] text-zinc-100 flex items-center justify-center p-6 relative overflow-hidden font-sans">
    
    <main class="max-w-6xl w-full grid lg:grid-cols-[1fr_350px] gap-8 relative z-10">
        
        <div class="space-y-6">
            <header class="flex items-end justify-between mb-8">
                <div class="flex items-end gap-4">
                    <div class="h-16 w-1 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
                    <div>
                        <h1 class="text-4xl font-black tracking-tighter uppercase italic leading-none">
                            Project <span class="text-red-600">Scorch</span>
                        </h1>
                        <p class="text-zinc-500 font-mono text-xs uppercase tracking-widest">{critique.url}</p>
                    </div>
                </div>

                {#if isTypingComplete}
                    <div in:fade class="flex gap-3">
                        <button onclick={shareToTwitter} class="bg-zinc-800 hover:bg-[#1DA1F2] transition-colors p-2.5 rounded-full border border-white/10">
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </button>
                        <button onclick={downloadPDF} class="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                            <Download size={14} /> PDF
                        </button>
                    </div>
                {/if}
            </header>

            {#if !isFinished}
                <div in:fade class="bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-12 flex flex-col items-center justify-center min-h-[450px]">
                    <Flame size={64} class="text-red-600 animate-bounce mb-8" />
                    <h2 class="text-2xl font-black uppercase italic tracking-tighter">Crunching the data...</h2>
                </div>
            {:else}
                <div in:fly={{ y: 20 }} class="relative group">
                    <div id="report-content" class="relative bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                        
                        <div id="pdf-print-header" class="hidden p-8 border-b border-red-600/30 bg-black">
                            <h2 class="text-2xl font-black text-red-600 italic uppercase">Project Scorch Audit</h2>
                            <p class="text-zinc-500 font-mono text-xs italic">{critique.url}</p>
                        </div>

                        <div class="p-8 lg:p-12 space-y-10">
                            {#if critique.desktop_screenshot}
                                <div class="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img src={critique.desktop_screenshot} alt="Visual Evidence" class="w-full h-full object-cover" />
                                </div>
                            {/if}

                            <div id="roast-container" class="max-h-[500px] overflow-y-auto pr-4 scroll-smooth scrollbar-custom">
                                <article class="prose prose-invert prose-red max-w-none">
                                    {@html renderedRoast}
                                    {#if !isTypingComplete}<span class="inline-block w-2.5 h-5 bg-red-600 animate-pulse ml-1"></span>{/if}
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            {/if}
        </div>

        <aside class="space-y-6">
            <div class="bg-zinc-900/80 border border-white/5 rounded-2xl p-6">
                <h3 class="text-xs font-mono uppercase text-zinc-500 mb-4 flex items-center gap-2"><Terminal size={14} /> Logs</h3>
                <div class="space-y-3 h-64 overflow-y-auto scrollbar-hide">
                    {#each logs as log}<div class="text-[10px] font-mono flex gap-2" transition:slide><span class="text-red-600 shrink-0">[{new Date().toLocaleTimeString()}]</span><span class="text-zinc-500">{log}</span></div>{/each}
                </div>
            </div>
            <Link href="/register" class="block bg-black p-6 rounded-2xl border border-white/10 hover:border-red-600/50 transition-all">
                <h4 class="text-white font-bold">Fix the Damage</h4>
                <p class="text-xs text-zinc-500 mt-1 uppercase font-mono">Unlock 14 technical solutions.</p>
            </Link>
        </aside>
    </main>
</div>

<style>
    :global(body) { background-color: #050505; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-custom::-webkit-scrollbar { width: 4px; }
    .scrollbar-custom::-webkit-scrollbar-thumb { background: rgba(220, 38, 38, 0.4); border-radius: 10px; }
</style>