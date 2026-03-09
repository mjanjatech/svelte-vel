<script lang="ts">
    import { router } from '@inertiajs/svelte';
    import AppHead from '@/components/AppHead.svelte';
    import { Button } from '@/components/ui/button';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import { Terminal, Sparkles, ChevronRight, Zap, Lightbulb, Box, Cpu } from 'lucide-svelte';
    import { fade, fly } from 'svelte/transition';
    import AlertError from '@/components/AlertError.svelte';

    let description = $state('');
    let isSubmitting = $state(false);

    const presets = [
        { name: 'SaaS Dashboard', prompt: 'A multi-tenant SaaS dashboard for tracking subscription metrics using Stripe API, Svelte, and PostgreSQL.' },
        { name: 'Mobile Marketplace', prompt: 'A peer-to-peer marketplace app for selling vintage clothing. Needs geolocation and real-time chat.' },
        { name: 'AI Content Tool', prompt: 'A tool that generates SEO blog posts from YouTube transcripts using OpenAI.' }
    ];

    function applyPreset(text: string) {
        description = text;
    }

    function handleSubmit() {
        if (!description.trim()) return;
        isSubmitting = true;
        router.post('/blueprint/guest', { description });
    }
</script>

<AppHead title="Architect | System Prompt" />

<div class="min-h-screen bg-[#0a0a0a] text-zinc-100 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
    
    <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900/10 blur-[120px] rounded-full"></div>
    </div>

    <div class="max-w-3xl w-full relative z-10" in:fly={{ y: 30, duration: 1000 }}>
        
        <header class="mb-12 flex flex-col items-center text-center">
            <div class="flex items-center gap-3 mb-4">
                <div class="p-2 bg-red-600/10 border border-red-600/20 rounded-lg">
                    <Cpu size={24} class="text-red-500" />
                </div>
                <div class="h-[1px] w-12 bg-zinc-800"></div>
                <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-red-500/70">Terminal_Active</span>
            </div>
            
            <h1 class="text-5xl font-black tracking-tighter uppercase italic">
                ARCHITECT <span class="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-800">AIDAN</span>
            </h1>
            <p class="mt-2 text-zinc-500 font-mono text-xs uppercase tracking-widest">Constructing digital infrastructure via neural pathways</p>
        </header>

        <main class="grid gap-6">
            <div class="flex flex-wrap justify-center gap-3" in:fade={{ delay: 200 }}>
                {#each presets as preset}
                    <button 
                        type="button"
                        onclick={() => applyPreset(preset.prompt)}
                        class="group relative px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-md transition-all hover:border-red-600/50 overflow-hidden"
                    >
                        <div class="absolute inset-0 bg-red-600/5 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                        <span class="relative z-10 text-[11px] font-mono uppercase tracking-tight text-zinc-400 group-hover:text-white transition-colors">{preset.name}</span>
                    </button>
                {/each}
            </div>

            <div class="relative group">
                <div class="absolute -inset-0.5 bg-gradient-to-b from-red-600/20 to-transparent rounded-2xl blur-md opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                
                <div class="relative bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800 rounded-2xl p-6 md:p-10 shadow-3xl">
                    <AlertError />

                    <form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} class="space-y-8">
                        <div class="space-y-4">
                            <div class="flex justify-between items-end">
                                <Label class="flex items-center gap-2 text-zinc-400 font-mono text-[10px] uppercase tracking-widest">
                                    <Terminal size={14} class="text-red-500" /> System_Input
                                </Label>
                                <span class="text-[9px] font-mono text-zinc-600 uppercase">Input_Size: {description.length} chars</span>
                            </div>
                            
                            <div class="relative">
                                <Textarea
                                    id="description"
                                    bind:value={description}
                                    required
                                    placeholder="Execute project description..."
                                    class="bg-zinc-900/30 border-zinc-800/50 rounded-xl p-6 text-zinc-200 placeholder:text-zinc-700 focus:ring-1 focus:ring-red-600/30 focus:border-red-600/30 transition-all resize-none min-h-[220px] text-lg font-light leading-relaxed shadow-inner"
                                />
                                
                                <div class="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/5 rounded-tr-xl"></div>
                            </div>
                        </div>

                        <div class="flex flex-col gap-6">
                            <Button
                                type="submit"
                                disabled={isSubmitting || !description.trim()}
                                class="h-16 w-full bg-white text-black hover:bg-red-600 hover:text-white font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-500 group/btn disabled:opacity-20"
                            >
                                <div class="flex items-center gap-3">
                                    {#if isSubmitting}
                                        <Zap size={20} class="animate-pulse" />
                                        <span>Synthesizing...</span>
                                    {:else}
                                        <span>Deploy Blueprint</span>
                                        <ChevronRight size={20} class="group-hover/btn:translate-x-2 transition-transform" />
                                    {/if}
                                </div>
                            </Button>
                            
                            <div class="flex items-center justify-between px-2">
                                <div class="flex items-center gap-2 text-zinc-600">
                                    <Lightbulb size={14} />
                                    <span class="text-[10px] font-mono uppercase">Add tech stack for precision</span>
                                </div>
                                <div class="flex gap-1">
                                    <div class="w-1 h-1 bg-red-600/40 rounded-full"></div>
                                    <div class="w-1 h-1 bg-zinc-800 rounded-full"></div>
                                    <div class="w-1 h-1 bg-zinc-800 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>

        <footer class="mt-8 flex justify-center gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <div class="flex items-center gap-2 font-mono text-[9px] uppercase tracking-tighter">
                <Box size={12} /> Encrypted_Session
            </div>
            <div class="flex items-center gap-2 font-mono text-[9px] uppercase tracking-tighter text-red-500">
                <div class="w-1 h-1 bg-red-500 animate-ping rounded-full"></div> System_Online
            </div>
        </footer>
    </div>
</div>

<style>
    :global(body) {
        background-color: #0a0a0a;
    }
</style>