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
    import { Image as ImageIcon, Loader2, Download, Trash2, CheckCircle2, UploadCloud, AlertCircle } from 'lucide-svelte';
    import { Progress } from '@/components/ui/progress';
    let { children }: { children?: Snippet<[Record<string, unknown>]> } = $props();

    // Reactive State
    let isOpen = $state(false);
    let fileInputRef = $state<HTMLInputElement | null>(null);
    let selectedFile = $state<File | null>(null);
    let previewUrl = $state<string | null>(null);
    let isOptimizing = $state(false);
    let optimizationProgress = $state(0);
    let optimizedImage = $state<string | null>(null);
    let originalSize = $state<string>('');
    let optimizedSize = $state<string>('');
    let compressionRatio = $state<number>(0);
    let isDragging = $state(false);

    function formatFileSize(bytes: number): string {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function handleFile(file: File) {
        if (!file.type.startsWith('image/')) return;
        selectedFile = file;
        previewUrl = URL.createObjectURL(file);
        optimizedImage = null;
        originalSize = formatFileSize(file.size);
        optimizationProgress = 0;
    }

    function handleFileSelect(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target.files?.length) handleFile(target.files[0]);
    }

    function onDrop(e: DragEvent) {
        e.preventDefault();
        isDragging = false;
        if (e.dataTransfer?.files.length) handleFile(e.dataTransfer.files[0]);
    }

    async function optimizeImage() {
        if (!selectedFile) return;
        isOptimizing = true;
        optimizationProgress = 0;

        try {
            const formData = new FormData();
            formData.append('image', selectedFile);

            const progressInterval = setInterval(() => {
                if (optimizationProgress < 90) optimizationProgress += 5;
            }, 100);

            const { data } = await axios.post('/api/tools/optimize-image', formData);

            clearInterval(progressInterval);
            optimizationProgress = 100;
            optimizedImage = data.optimized_image;
            optimizedSize = formatFileSize(data.optimized_size);
            compressionRatio = data.compression_ratio;
        } catch (error) {
            console.error(error);
        } finally {
            isOptimizing = false;
        }
    }

    function reset() {
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        selectedFile = null;
        previewUrl = null;
        optimizedImage = null;
        optimizationProgress = 0;
    }

    function downloadOptimizedImage() {
        if (!optimizedImage) return;
        const a = document.createElement('a');
        a.href = optimizedImage;
        a.download = selectedFile ? `optimized-${selectedFile.name}` : 'optimized-image.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
</script>

<Dialog bind:open={isOpen}>
    <DialogTrigger>
        <div role="button" tabindex="0" onclick={() => isOpen = true} onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                isOpen = true;
            }
        }} class="cursor-pointer">
            {@render children?.({})}
        </div>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[500px] overflow-hidden">
        <DialogHeader>
            <DialogTitle class="flex items-center gap-2 text-xl font-bold">
                <div class="bg-primary/10 p-2 rounded-lg">
                    <ImageIcon class="size-5 text-primary" />
                </div>
                Image Optimizer
            </DialogTitle>
            <DialogDescription>
                Reduce file size without losing quality.
            </DialogDescription>
        </DialogHeader>

        <div class="py-2">
            {#if !selectedFile}
                <div 
                    role="presentation"
                    ondragover={(e) => { e.preventDefault(); isDragging = true; }}
                    ondragleave={() => isDragging = false}
                    ondrop={onDrop}
                    class="relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-10 text-center transition-all
                    {isDragging ? 'border-primary bg-primary/5 scale-[0.99]' : 'border-muted-foreground/25 bg-muted/50 hover:bg-muted'}"
                >
                    <UploadCloud class="size-10 mb-4 text-muted-foreground" />
                    <h3 class="font-medium">Drag image here</h3>
                    <p class="text-xs text-muted-foreground mt-1 mb-6">PNG, JPEG, or WebP up to 10MB</p>
                    
                    <input type="file" accept="image/*" class="hidden" id="img-up" onchange={handleFileSelect} bind:this={fileInputRef} />
                    <label for="img-up">
                        <Button variant="secondary" size="sm" onclick={() => fileInputRef?.click()}>Browse Files</Button>
                    </label>
                </div>
            {:else}
                <div class="space-y-4">
                    <div class="relative group aspect-video rounded-xl border bg-black/5 overflow-hidden flex items-center justify-center">
                        <img src={optimizedImage || previewUrl} alt="Preview" class="max-h-full object-contain transition-opacity duration-300" />
                        
                        {#if !isOptimizing}
                            <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button size="icon" variant="destructive" class="size-8" onclick={reset}>
                                    <Trash2 class="size-4" />
                                </Button>
                            </div>
                        {/if}

                        {#if isOptimizing}
                            <div class="absolute inset-0 bg-background/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
                                <Loader2 class="size-8 text-primary animate-spin mb-4" />
                                <Progress value={optimizationProgress} class="h-2 w-48 mb-2" />
                                <p class="text-xs font-medium animate-pulse">Crunching pixels...</p>
                            </div>
                        {/if}
                    </div>

                    {#if optimizedImage}
                        <div class="grid grid-cols-2 gap-4">
                            <div class="p-3 rounded-lg border bg-muted/50">
                                <p class="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Original</p>
                                <p class="text-lg font-semibold">{originalSize}</p>
                            </div>
                            <div class="p-3 rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20">
                                <p class="text-[10px] uppercase tracking-wider text-green-600 font-bold">Optimized</p>
                                <div class="flex items-center gap-2">
                                    <p class="text-lg font-semibold">{optimizedSize}</p>
                                    <span class="text-[10px] bg-green-500 text-white px-1.5 py-0.5 rounded-full">-{Math.round(compressionRatio)}%</span>
                                </div>
                            </div>
                        </div>

                        <div class="flex gap-3">
                            <Button class="flex-1" onclick={downloadOptimizedImage}>
                                <Download class="size-4 mr-2" /> Download
                            </Button>
                            <Button variant="outline" class="flex-1" onclick={reset}>
                                New Image
                            </Button>
                        </div>
                    {:else if !isOptimizing}
                        <div class="flex items-center justify-between p-3 rounded-lg border bg-muted/30">
                            <div class="flex items-center gap-3 overflow-hidden">
                                <ImageIcon class="size-4 text-muted-foreground flex-shrink-0" />
                                <span class="text-sm truncate font-medium">{selectedFile.name}</span>
                            </div>
                            <span class="text-xs text-muted-foreground whitespace-nowrap ml-2">{originalSize}</span>
                        </div>
                        <Button class="w-full shadow-lg shadow-primary/20" onclick={optimizeImage}>
                            Optimize Now
                        </Button>
                    {/if}
                </div>
            {/if}
        </div>
    </DialogContent>
</Dialog>