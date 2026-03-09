<script lang="ts">
    import type { Snippet } from 'svelte';
    import Dialog from '@/components/ui/dialog/Dialog.svelte';
    import DialogTrigger from '@/components/ui/dialog/DialogTrigger.svelte';
    import DialogContent from '@/components/ui/dialog/DialogContent.svelte';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { 
        Smartphone, 
        Tablet, 
        Monitor, 
        RotateCw, 
        ExternalLink, 
        Expand,
        SmartphoneNfc
    } from 'lucide-svelte';

    let { children }: { children?: Snippet<[Record<string, unknown>]> } = $props();

    // State
    let isOpen = $state(false);
    let url = $state('');
    let activeUrl = $state('');
    let viewMode = $state<'mobile' | 'tablet' | 'desktop'>('desktop');
    let isPortrait = $state(true);

    const presets = {
        mobile: { width: 375, height: 667, label: 'iPhone SE' },
        tablet: { width: 768, height: 1024, label: 'iPad Mini' },
        desktop: { width: 1280, height: 800, label: 'MacBook Air' }
    };

    function loadUrl() {
        if (!url) return;
        let cleanUrl = url.trim();
        if (!cleanUrl.startsWith('http')) cleanUrl = 'https://' + cleanUrl;
        activeUrl = cleanUrl;
        url = cleanUrl;
    }

    function toggleOrientation() {
        isPortrait = !isPortrait;
    }

    // Dynamic dimensions based on orientation
    let frameWidth = $derived(isPortrait ? presets[viewMode].width : presets[viewMode].height);
    let frameHeight = $derived(isPortrait ? presets[viewMode].height : presets[viewMode].width);
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
    
    <DialogContent class="max-w-[95vw] h-[90vh] flex flex-col p-0 gap-0 overflow-hidden">
        <div class="border-b bg-muted/30 p-4 flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-2 flex-1 min-w-[300px]">
                <Input 
                    bind:value={url} 
                    placeholder="Enter website URL..." 
                    class="h-9 focus-visible:ring-blue-500"
                    onkeydown={(e) => e.key === 'Enter' && loadUrl()}
                />
                <Button size="sm" onclick={loadUrl}>Load</Button>
            </div>

            <div class="flex items-center bg-background border rounded-lg p-1 shadow-sm">
                <Button 
                    variant={viewMode === 'mobile' ? 'secondary' : 'ghost'} 
                    size="icon" class="size-8" 
                    onclick={() => viewMode = 'mobile'}
                    title="Mobile View"
                >
                    <Smartphone class="size-4" />
                </Button>
                <Button 
                    variant={viewMode === 'tablet' ? 'secondary' : 'ghost'} 
                    size="icon" class="size-8" 
                    onclick={() => viewMode = 'tablet'}
                    title="Tablet View"
                >
                    <Tablet class="size-4" />
                </Button>
                <Button 
                    variant={viewMode === 'desktop' ? 'secondary' : 'ghost'} 
                    size="icon" class="size-8" 
                    onclick={() => viewMode = 'desktop'}
                    title="Desktop View"
                >
                    <Monitor class="size-4" />
                </Button>
                <div class="w-px h-4 bg-border mx-1"></div>
                <Button 
                    variant="ghost" 
                    size="icon" class="size-8" 
                    onclick={toggleOrientation}
                    disabled={viewMode === 'desktop'}
                    title="Rotate Device"
                >
                    <RotateCw class="size-4 {isPortrait ? '' : 'rotate-90'} transition-transform" />
                </Button>
            </div>

            <div class="text-xs text-muted-foreground font-mono hidden sm:block">
                {frameWidth}px × {frameHeight}px
            </div>
        </div>

        <div class="flex-1 bg-zinc-900/5 dark:bg-zinc-950/50 relative overflow-auto flex justify-center p-8 transition-all">
            {#if activeUrl}
                <div 
                    class="bg-background shadow-2xl rounded-t-xl border-x border-t transition-all duration-300 ease-in-out relative"
                    style="width: {frameWidth}px; height: {frameHeight}px;"
                >
                    <div class="h-6 w-full bg-muted border-b flex items-center px-3 gap-1.5 rounded-t-xl">
                        <div class="size-2 rounded-full bg-red-400/50"></div>
                        <div class="size-2 rounded-full bg-amber-400/50"></div>
                        <div class="size-2 rounded-full bg-emerald-400/50"></div>
                    </div>
                    
                    <iframe 
                        src={activeUrl} 
                        title="Responsive Preview"
                        class="w-full h-[calc(100%-24px)] border-none"
                    ></iframe>
                </div>
            {:else}
                <div class="flex flex-col items-center justify-center text-center opacity-60">
                    <div class="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                        <SmartphoneNfc class="size-10 text-blue-600" />
                    </div>
                    <h3 class="text-lg font-semibold">No URL Loaded</h3>
                    <p class="text-sm max-w-[280px]">Enter a URL above to test how your site responds to different screen sizes.</p>
                </div>
            {/if}
        </div>
    </DialogContent>
</Dialog>