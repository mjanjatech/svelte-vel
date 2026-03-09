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
    import { Badge } from '@/components/ui/badge';
    import ScrollArea from '@/components/ui/scroll-area/ScrollArea.svelte';
    import { 
        Search, Loader2, AlertCircle, CheckCircle2, 
        AlertTriangle, ChevronRight, Globe, Camera 
    } from 'lucide-svelte';

    let { children }: { children?: Snippet<[Record<string, unknown>]> } = $props();

    // State
    let isOpen = $state(false);
    let url = $state('');
    let isAnalyzing = $state(false);
    let screenshot = $state<string | null>(null);
    let auditItems = $state<{ title: string, desc: string, type: 'success' | 'warning' | 'critical' }[]>([]);

    async function analyzeSEO() {
        if (!url) return;
        
        let cleanUrl = url.trim();
        if (!cleanUrl.startsWith('http')) cleanUrl = 'https://' + cleanUrl;
        url = cleanUrl;

        isAnalyzing = true;
        auditItems = [];
        screenshot = null;

        try {
            // Step 1: Dispatch SEO Checker Job
            const { data } = await axios.post('/api/audit/scrape', { url: url });
            const critiqueId = data.id;

            // Step 2: Use polling for reliability
            let completed = false;
            while (!completed) {
                await new Promise(r => setTimeout(r, 3000));
                const statusCheck = await axios.get(`/api/audit/seo-status/${critiqueId}`);
                
                if (statusCheck.data.seo_status === 'completed') {
                    const seoResults = statusCheck.data.seo_results;
                    screenshot = seoResults.screenshot; // Base64 image from Puppeteer
                    
                    auditItems = [
                        {
                            title: 'Page Title',
                            desc: seoResults.title || 'No <title> tag found in the <head>.',
                            type: seoResults.title ? 'success' : 'critical'
                        },
                        {
                            title: 'Meta Description',
                            desc: seoResults.description || 'Missing description. Search engines will guess based on content.',
                            type: seoResults.description ? 'success' : 'warning'
                        },
                        {
                            title: 'Heading Hierarchy',
                            desc: seoResults.h1Count === 1 
                                ? 'Perfect. Found exactly one H1 tag.' 
                                : `Found ${seoResults.h1Count} H1 tags. (Recommended: 1)`,
                            type: seoResults.h1Count === 1 ? 'success' : 'critical'
                        },
                        {
                            title: 'Image Alt Text',
                            desc: seoResults.imagesWithoutAlt > 0 
                                ? `${seoResults.imagesWithoutAlt} images are missing alt text.` 
                                : 'All images have descriptive alt text.',
                            type: seoResults.imagesWithoutAlt > 0 ? 'warning' : 'success'
                        },
                        {
                            title: 'Mobile Viewport',
                            desc: seoResults.isMobileFriendly ? 'Viewport tag is set correctly.' : 'Missing viewport tag!',
                            type: seoResults.isMobileFriendly ? 'success' : 'critical'
                        }
                    ];
                    isAnalyzing = false;
                    completed = true;
                } else if (statusCheck.data.seo_status === 'failed') {
                    throw new Error('SEO audit failed');
                }
            }
        } catch (err) {
            console.error("SEO Audit failed", err);
            isAnalyzing = false;
        }
    }

    const typeColors = {
        success: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
        warning: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
        critical: 'text-red-500 bg-red-500/10 border-red-500/20'
    };

    const typeIcons = {
        success: CheckCircle2,
        warning: AlertTriangle,
        critical: AlertCircle
    };
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

    <DialogContent class="sm:max-w-[650px] h-[85vh] flex flex-col p-0 overflow-hidden">
        <div class="p-6 pb-0">
            <DialogHeader>
                <DialogTitle class="flex items-center gap-2 text-xl font-bold">
                    <Search class="size-5 text-purple-500" />
                    Puppeteer SEO Crawler
                </DialogTitle>
                <DialogDescription>
                    Real-time metadata extraction and content hierarchy analysis.
                </DialogDescription>
            </DialogHeader>

            <div class="flex items-center gap-2 my-6">
                <div class="relative flex-1">
                    <Globe class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input 
                        bind:value={url} 
                        placeholder="https://example.com" 
                        class="pl-9 focus-visible:ring-purple-500"
                        onkeydown={(e) => e.key === 'Enter' && analyzeSEO()}
                    />
                </div>
                <Button onclick={analyzeSEO} disabled={isAnalyzing || !url} class="bg-purple-600 hover:bg-purple-700 text-white">
                    {#if isAnalyzing}
                        <Loader2 class="size-4 animate-spin mr-2" />
                        Crawling
                    {:else}
                        Run Audit
                    {/if}
                </Button>
            </div>
        </div>

        <ScrollArea class="flex-1 border-t bg-muted/20">
            <div class="p-6 space-y-6">
                {#if isAnalyzing}
                    <div class="space-y-4">
                        <div class="h-48 w-full rounded-xl bg-muted animate-pulse border-2 border-dashed"></div>
                        {#each Array(4) as _}
                            <div class="h-16 w-full rounded-xl bg-muted animate-pulse"></div>
                        {/each}
                    </div>
                {:else if auditItems.length > 0}
                    {#if screenshot}
                        <div class="relative rounded-xl overflow-hidden border-2 border-muted shadow-sm bg-background">
                            <div class="absolute top-2 left-2 z-10">
                                <Badge variant="secondary" class="gap-1.5 backdrop-blur-md bg-white/80 dark:bg-black/80">
                                    <Camera class="size-3" /> Visual Preview
                                </Badge>
                            </div>
                            <img src="data:image/png;base64,{screenshot}" alt="Site Preview" class="w-full h-48 object-cover object-top" />
                        </div>
                    {/if}

                    <div class="grid gap-3">
                        {#each auditItems as item}
                            {@const Icon = typeIcons[item.type]}
                            <div class="flex items-start gap-4 p-4 rounded-xl border bg-card shadow-sm">
                                <div class="mt-0.5">
                                    <Icon class="size-5 {item.type === 'critical' ? 'text-red-500' : item.type === 'warning' ? 'text-amber-500' : 'text-emerald-500'}" />
                                </div>
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center gap-2 mb-1">
                                        <h4 class="font-bold text-sm leading-none">{item.title}</h4>
                                        <span class="text-[10px] px-1.5 py-0.5 rounded border font-bold uppercase tracking-tighter {typeColors[item.type]}">
                                            {item.type}
                                        </span>
                                    </div>
                                    <p class="text-xs text-muted-foreground truncate">{item.desc}</p>
                                </div>
                                <ChevronRight class="size-4 text-muted-foreground/20" />
                            </div>
                        {/each}
                    </div>
                {:else}
                    <div class="h-[40vh] flex flex-col items-center justify-center text-center px-12">
                        <div class="size-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                            <Search class="size-8 text-purple-600" />
                        </div>
                        <h3 class="font-semibold">Ready to Scan</h3>
                        <p class="text-sm text-muted-foreground mt-1">Enter a URL to launch a headless browser and extract DOM metadata instantly.</p>
                    </div>
                {/if}
            </div>
        </ScrollArea>
        
        <div class="p-4 bg-background border-t flex justify-end">
            <Button variant="ghost" onclick={() => isOpen = false}>Close Audit</Button>
        </div>
    </DialogContent>
</Dialog>