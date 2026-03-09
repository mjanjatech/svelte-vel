<script lang="ts">
    import { Link } from '@inertiajs/svelte';
    import AppHead from '@/components/AppHead.svelte';
    import { create as register } from '@/actions/Laravel/Fortify/Http/Controllers/RegisteredUserController';
    import { Loader2, ShieldCheck, FileJson, Cpu, Lock, Download, ClipboardCheck, Terminal as TerminalIcon, FileText, ChevronRight } from 'lucide-svelte';
    import { fade, fly } from 'svelte/transition';
    import { marked } from 'marked';
    import DOMPurify from 'dompurify';

    let { critique }: { critique: any } = $props();
    let blueprint = $state<string | null>(null);
    let copied = $state(false);

    // Precise Markdown Configuration
    const renderedBlueprint = $derived.by(() => {
        if (!blueprint) return '';
        
        // Custom renderer to handle specific technical styling
        const renderer = new marked.Renderer();
        
        const html = marked.parse(blueprint, { 
            renderer,
            gfm: true,
            breaks: true 
        }) as string;

        return DOMPurify.sanitize(html);
    });

    const channel = window.Echo.channel(`blueprints.${critique.id}`);
    channel.listen('ProjectBlueprintGenerated', (data: { blueprintData: string }) => {
        blueprint = data.blueprintData;
    });

    function copyToClipboard() {
        if (!blueprint) return;
        navigator.clipboard.writeText(blueprint);
        copied = true;
        setTimeout(() => (copied = false), 2000);
    }
</script>

<AppHead title="Aidan | {blueprint ? 'Manifest Ready' : 'Synthesizing...'}" />

<div class="min-h-screen bg-[#050505] text-zinc-100 flex flex-col items-center justify-start p-4 md:p-10 relative overflow-x-hidden font-sans">
    
    <div class="fixed inset-0 opacity-5 pointer-events-none">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:60px_60px]"></div>
    </div>

    <div class="max-w-4xl w-full relative z-10 py-10">
        
        <div class="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
            <div class="flex items-center gap-4">
                <div class="h-10 w-1 bg-red-600"></div>
                <div>
                    <h1 class="text-2xl font-black uppercase italic tracking-tighter">Architect <span class="text-red-600">Aidan</span></h1>
                    <p class="text-[9px] font-mono text-zinc-600 tracking-[0.4em] uppercase">Blueprint_Generation_Module</p>
                </div>
            </div>
            
            <div class="hidden md:flex items-center gap-6">
                <div class="text-right">
                    <p class="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Protocol</p>
                    <p class="text-[10px] font-mono text-zinc-300 uppercase italic">GUEST_ACCESS_v4</p>
                </div>
                <div class="w-[1px] h-8 bg-white/10"></div>
                <div class="text-right">
                    <p class="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">Manifest_Status</p>
                    <p class="text-[10px] font-mono {blueprint ? 'text-emerald-500' : 'text-red-500'} uppercase italic">
                        {blueprint ? 'READY_FOR_EXPORT' : 'SYNTHESIZING...'}
                    </p>
                </div>
            </div>
        </div>

        {#if !blueprint}
            <div class="h-[60vh] flex flex-col items-center justify-center text-center" in:fade>
                <div class="relative mb-8">
                    <Loader2 size={60} class="text-red-600 animate-spin opacity-20" strokeWidth={1} />
                    <Cpu size={28} class="absolute inset-0 m-auto text-red-600 animate-pulse" />
                </div>
                <h2 class="text-xl font-bold uppercase tracking-[0.3em] text-white">Generating Manifest</h2>
                <p class="text-zinc-500 font-mono text-xs mt-4">Average processing time: 45s - 120s</p>
            </div>
        {:else}
            <div in:fly={{ y: 40, duration: 1000 }} class="space-y-8">
                
                <div class="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                    
                    <div class="px-6 py-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <FileText size={16} class="text-red-600" />
                            <span class="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Project_Technical_Blueprint.md</span>
                        </div>
                        <button 
                            onclick={copyToClipboard}
                            class="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all"
                        >
                            <span class="text-[10px] font-mono uppercase text-zinc-400 group-hover:text-white transition-colors">
                                {copied ? 'System_Copied' : 'Copy_Raw_Data'}
                            </span>
                            <ClipboardCheck size={14} class={copied ? 'text-emerald-500' : 'text-zinc-500'} />
                        </button>
                    </div>

                    <div class="p-8 md:p-12">
                        <article class="
                            prose prose-invert prose-sm max-w-none
                            prose-h2:text-red-600 prose-h2:uppercase prose-h2:tracking-tighter prose-h2:italic prose-h2:text-2xl prose-h2:border-l-4 prose-h2:border-red-600 prose-h2:pl-4 prose-h2:mb-8
                            prose-h3:text-zinc-100 prose-h3:uppercase prose-h3:tracking-widest prose-h3:text-sm prose-h3:font-black prose-h3:mt-12
                            prose-p:text-zinc-400 prose-p:text-base prose-p:leading-relaxed
                            prose-strong:text-zinc-100 prose-strong:font-bold
                            prose-ul:list-square prose-ul:marker:text-red-900
                            prose-li:text-zinc-400 prose-li:my-1
                            prose-table:border prose-table:border-white/5 prose-table:rounded-xl
                            prose-th:bg-white/5 prose-th:text-zinc-300 prose-th:p-4 prose-th:text-[10px] prose-th:uppercase prose-th:tracking-widest
                            prose-td:p-4 prose-td:border-t prose-td:border-white/5 prose-td:text-zinc-400
                            prose-hr:border-white/5 prose-hr:my-12
                        ">
                            {@html renderedBlueprint}
                        </article>
                    </div>

                    <div class="p-10 border-t border-white/5 bg-gradient-to-t from-red-600/5 to-transparent text-center">
                        <h4 class="text-white font-bold uppercase tracking-widest mb-2">Detailed Architecture Ready</h4>
                        <p class="text-zinc-500 text-xs font-mono mb-8">Full security audit, database ERD, and cost estimation manifest is waiting.</p>
                        
                        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
                            <Link
                                href={register.url()}
                                class="group relative w-full md:w-auto inline-flex items-center justify-center gap-4 px-12 py-5 bg-white text-black hover:bg-red-600 hover:text-white font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                            >
                                <span class="text-xs">Claim Ownership & PDF</span>
                                <Download size={18} class="group-hover:translate-y-1 transition-transform" />
                            </Link>
                            
                            <Link href="/blueprint/guest" class="text-zinc-600 hover:text-white text-[10px] uppercase font-mono tracking-widest flex items-center gap-2 transition-colors">
                                <ChevronRight size={12} /> Refine Prompt
                            </Link>
                        </div>

                        <div class="mt-10 flex items-center justify-center gap-10 border-t border-white/5 pt-8">
                            <div class="flex flex-col items-center opacity-30">
                                <ShieldCheck size={20} class="mb-2" />
                                <span class="text-[8px] font-mono uppercase tracking-[0.2em]">Data_Privacy</span>
                            </div>
                            <div class="flex flex-col items-center opacity-30">
                                <FileJson size={20} class="mb-2" />
                                <span class="text-[8px] font-mono uppercase tracking-[0.2em]">Source_Export</span>
                            </div>
                            <div class="flex flex-col items-center opacity-30">
                                <Lock size={20} class="mb-2" />
                                <span class="text-[8px] font-mono uppercase tracking-[0.2em]">Access_Locked</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <footer class="text-center py-10 opacity-20">
                    <p class="text-[9px] font-mono uppercase tracking-[0.5em] text-zinc-500">End_Of_Transmission // Architect_Aidan_v4.0.2</p>
                </footer>
            </div>
        {/if}
    </div>
</div>

<style>
    /* Custom Scrubber for the content area */
    :global(html) {
        scrollbar-color: #333 transparent;
        scrollbar-width: thin;
    }

    /* Custom styles for rendered lists */
    :global(.prose ul > li::marker) {
        content: '■ ';
        font-size: 0.7em;
    }

    /* Target the generated tables specifically */
    :global(.prose table) {
        width: 100%;
        border-collapse: collapse;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 12px;
    }

    /* Responsive tables */
    :global(.prose table-wrapper) {
        overflow-x: auto;
    }
</style>