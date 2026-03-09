<script lang="ts">
    import { router } from '@inertiajs/svelte';
    import AppHead from '@/components/AppHead.svelte';
    import { Button } from '@/components/ui/button';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import Terminal from 'lucide-svelte/icons/terminal';
    import Sparkles from 'lucide-svelte/icons/sparkles';
    import ChevronRight from 'lucide-svelte/icons/chevron-right';
    import Zap from 'lucide-svelte/icons/zap';
    import Lightbulb from 'lucide-svelte/icons/lightbulb';
    import Box from 'lucide-svelte/icons/box';
    import Cpu from 'lucide-svelte/icons/cpu';
    import Loader2 from 'lucide-svelte/icons/loader-2';
    import { fade, fly } from 'svelte/transition';
    import AlertError from '@/components/AlertError.svelte';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

    let description = $state('');
    let isSubmitting = $state(false);

    const presets = [
        { name: 'Enterprise SaaS Platform', prompt: 'A scalable enterprise SaaS platform for managing customer relationships with advanced analytics and AI-powered insights.' },
        { name: 'Mobile E-commerce App', prompt: 'A high-performance mobile e-commerce application with AR product visualization and personalized recommendations.' },
        { name: 'AI Analytics Dashboard', prompt: 'An AI-powered analytics dashboard for real-time data processing with predictive modeling and natural language queries.' }
    ];

    function applyPreset(text: string) {
        description = text;
    }

    function handleSubmit() {
        if (!description.trim()) return;
        isSubmitting = true;
        router.post('/blueprint/pro', { description });
    }
</script>

<AppHead title="Pro Blueprint | AI-Powered Project Architecture" />

<div class="min-h-screen bg-[#0a0a0a] text-zinc-100 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
    
    <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full"></div>
    </div>

    <div class="max-w-3xl w-full relative z-10" in:fly={{ y: 30, duration: 1000 }}>
        
        <header class="mb-12 flex flex-col items-center text-center">
            <div class="flex items-center gap-3 mb-4">
                <div class="p-2 bg-blue-600/10 border border-blue-600/20 rounded-lg">
                    <Cpu size={24} class="text-blue-500" />
                </div>
                <div class="h-[1px] w-12 bg-zinc-800"></div>
                <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-500/70">Terminal_Active</span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                PROJECT <span class="text-blue-500">BLUEPRINT</span>
            </h1>
            
            <p class="text-zinc-400 max-w-2xl text-lg">
                Describe your dream application. Our AI will architect the system, 
                define the tech stack, and provide a complete implementation roadmap.
            </p>
        </header>

        <Card class="bg-[#0f0f0f] border-zinc-800 shadow-2xl">
            <CardHeader>
                <CardTitle class="flex items-center gap-2 text-zinc-100">
                    <Terminal class="w-5 h-5 text-blue-500" />
                    System Prompt
                </CardTitle>
            </CardHeader>
            <CardContent class="space-y-6">
                <div class="space-y-3">
                    <Label for="description" class="text-zinc-400">Project Description</Label>
                    <Textarea
                        id="description"
                        bind:value={description}
                        placeholder="e.g. A mobile app that connects local farmers with restaurants"
                        class="min-h-[200px] bg-[#1a1a1a] border-zinc-700 text-zinc-100 placeholder:text-zinc-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none p-4 text-lg leading-relaxed"
                    />
                </div>

                <AlertError errors={[]} />

                <div class="space-y-4">
                    <div class="flex items-center gap-2 text-sm text-zinc-500">
                        <Sparkles class="w-4 h-4" />
                        <span>Quick Presets</span>
                    </div>
                    <div class="grid gap-3">
                        {#each presets as preset}
                            <button
                                type="button"
                                class="text-left p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-800/50 transition-all group"
                                on:click={() => applyPreset(preset.prompt)}
                            >
                                <div class="flex items-center justify-between mb-2">
                                    <span class="font-medium text-zinc-100 group-hover:text-blue-400 transition-colors">{preset.name}</span>
                                    <ChevronRight class="w-4 h-4 text-zinc-600 group-hover:text-blue-400 transition-colors" />
                                </div>
                                <p class="text-sm text-zinc-400 line-clamp-2">{preset.prompt}</p>
                            </button>
                        {/each}
                    </div>
                </div>

                <Button
                    onClick={handleSubmit}
                    disabled={!description.trim() || isSubmitting}
                    class="w-full py-6 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {#if isSubmitting}
                        <div class="flex items-center justify-center gap-2">
                            <Loader2 class="w-5 h-5 animate-spin" />
                            <span>ARCHITECTING SYSTEM...</span>
                        </div>
                    {:else}
                        <div class="flex items-center justify-center gap-2">
                            <Zap class="w-5 h-5" />
                            <span>GENERATE PRO BLUEPRINT</span>
                        </div>
                    {/if}
                </Button>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
                    {#each [
                        { icon: Box, label: 'Architecture', desc: 'System design & patterns' },
                        { icon: Cpu, label: 'Tech Stack', desc: 'Framework recommendations' },
                        { icon: Lightbulb, label: 'Features', desc: 'MVP requirements' }
                    ] as item}
                        <div class="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
                            <item.icon class="w-6 h-6 text-blue-500 mb-3" />
                            <h3 class="font-medium text-zinc-100 mb-1">{item.label}</h3>
                            <p class="text-xs text-zinc-500">{item.desc}</p>
                        </div>
                    {/each}
                </div>
            </CardContent>
        </Card>

        <footer class="mt-12 text-center text-xs text-zinc-600 font-mono">
            SYSTEM ONLINE // READY TO ARCHITECT // v2.0.4
        </footer>
    </div>
</div>
