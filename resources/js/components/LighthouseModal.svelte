<script lang="ts">
    import type { Snippet } from 'svelte';
    import axios from 'axios';
    import {
        Dialog,
        DialogContent,
        DialogDescription,
        DialogHeader,
        DialogTitle,
        DialogTrigger,
    } from '@/components/ui/dialog';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Zap, Loader2, Info } from 'lucide-svelte';
    import { Progress } from '@/components/ui/progress';

    // Props using Svelte 5 snippet syntax
    let { children }: { children?: Snippet<[Record<string, unknown>]> } = $props();

    // Reactive State
    let isOpen = $state(false);
    let url = $state('');
    let isScanning = $state(false);
    let scanStep = $state('');
    let results = $state<{ label: string, score: number }[] | null>(null);

    async function startScan() {
        if (!url) return;

        // URL Sanitization UX
        let cleanUrl = url.trim();
        if (!cleanUrl.startsWith('http')) cleanUrl = 'https://' + cleanUrl;
        url = cleanUrl;

        isScanning = true;
        results = null;

        try {
            scanStep = 'Dispatching Audit Job...';
            const { data } = await axios.post('/api/audit/analyze-page-speed', { url: url });
            const critiqueId = data.id;

            scanStep = 'Google is analyzing performance...';

            // Use polling for reliability
            let completed = false;
            while (!completed) {
                await new Promise(r => setTimeout(r, 3000));
                const statusCheck = await axios.get(`/api/audit/status/${critiqueId}`);
                
                if (statusCheck.data.status === 'completed') {
                    const raw = statusCheck.data.results.lighthouseResult.categories;
                    results = [
                        { label: 'Performance', score: raw.performance.score * 100 },
                        { label: 'Accessibility', score: raw.accessibility.score * 100 },
                        { label: 'Best Practices', score: raw['best-practices'].score * 100 },
                        { label: 'SEO', score: raw.seo.score * 100 }
                    ];
                    isScanning = false;
                    completed = true;
                } else if (statusCheck.data.status === 'failed') {
                    throw new Error('Audit failed');
                }
            }
        } catch (error) {
            console.error('Error analyzing page speed:', error);
            isScanning = false;
        }
    }

    function getScoreColor(score: number) {
        if (score >= 90) return 'text-green-500';
        if (score >= 50) return 'text-orange-500';
        return 'text-red-500';
    }

    // Helper for SVG circular progress math
    const radius = 28;
    const circumference = 2 * Math.PI * radius;
</script>

<Dialog bind:open={isOpen}>
    <DialogTrigger>
        <div 
            role="button" 
            tabindex="0" 
            onclick={() => isOpen = true}
            onkeydown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    isOpen = true;
                }
            }}
            class="cursor-pointer"
        >
            {@render children?.({})}
        </div>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[480px]">
        <DialogHeader>
            <DialogTitle class="flex items-center gap-2 text-xl">
                <Zap class="size-5 text-amber-500 fill-amber-500" />
                Lighthouse Quick-Scan
            </DialogTitle>
            <DialogDescription>
                Get instant Core Web Vital scores for any live website.
            </DialogDescription>
        </DialogHeader>

        <div class="grid gap-6 py-4">
            <div class="flex items-center gap-2">
                <div class="relative flex-1">
                    <Input 
                        bind:value={url} 
                        placeholder="example.com" 
                        disabled={isScanning}
                        class="pl-3 focus-visible:ring-amber-500"
                        onkeydown={(e) => e.key === 'Enter' && startScan()}
                    />
                </div>
                <Button 
                    onclick={startScan} 
                    disabled={isScanning || !url}
                    class="bg-amber-500 hover:bg-amber-600 text-white min-w-[80px]"
                >
                    {#if isScanning}
                        <Loader2 class="size-4 animate-spin" />
                    {:else}
                        Analyze
                    {/if}
                </Button>
            </div>

            {#if isScanning}
                <div class="space-y-4 rounded-xl border bg-muted/30 p-8 text-center">
                    <div class="relative mx-auto flex h-12 w-12 items-center justify-center">
                        <Zap class="size-6 text-amber-500 animate-bounce" />
                    </div>
                    <div class="space-y-2">
                        <p class="text-sm font-medium text-foreground">{scanStep}</p>
                        <Progress value={undefined} class="h-1.5 w-full bg-amber-100 dark:bg-amber-950" />
                    </div>
                </div>
            {/if}

            {#if !isScanning && !results}
                <div class="flex flex-col items-center justify-center rounded-xl border border-dashed py-10 px-4 text-center">
                    <div class="mb-4 rounded-full bg-secondary p-3">
                        <Info class="size-6 text-muted-foreground" />
                    </div>
                    <h3 class="text-sm font-semibold text-foreground">Ready to Audit</h3>
                    <p class="mt-1 text-xs text-muted-foreground max-w-[240px]">
                        Enter a URL above to see how your site performs against industry standards.
                    </p>
                </div>
            {/if}

            {#if results}
                <div class="grid grid-cols-2 gap-4 animate-in fade-in zoom-in-95 duration-300">
                    {#each results as report}
                        <div class="flex flex-col items-center justify-center rounded-xl border bg-card p-4 shadow-sm">
                            <div class="relative size-16 mb-3">
                                <svg class="size-full -rotate-90" viewBox="0 0 64 64">
                                    <circle
                                        cx="32" cy="32" r={radius}
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        class="text-muted/20"
                                    />
                                    <circle
                                        cx="32" cy="32" r={radius}
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-dasharray={circumference}
                                        stroke-dashoffset={circumference - (circumference * report.score) / 100}
                                        stroke-linecap="round"
                                        class="{getScoreColor(report.score)} transition-all duration-1000 ease-out"
                                    />
                                </svg>
                                <div class="absolute inset-0 flex items-center justify-center text-sm font-bold">
                                    {report.score}
                                </div>
                            </div>
                            
                            <span class="text-[10px] text-muted-foreground uppercase font-black tracking-widest text-center">
                                {report.label}
                            </span>
                        </div>
                    {/each}
                </div>
                
                <div class="flex gap-2 pt-2">
                    <Button variant="outline" class="flex-1 text-xs" onclick={() => results = null}>
                        Clear
                    </Button>
                    <Button variant="secondary" class="flex-1 text-xs" onclick={() => isOpen = false}>
                        View Details
                    </Button>
                </div>
            {/if}
        </div>
    </DialogContent>
</Dialog>