<script lang="ts">
    import Heading from '@/components/Heading.svelte';
    import ImageOptimizer from '@/components/ImageOptimizer.svelte';
    import { Image } from 'lucide-svelte';
</script>

<div class="flex min-h-screen flex-col">
    <div class="flex-1 space-y-6 p-8 pt-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="size-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Image class="size-4 text-blue-600" />
                </div>
                <Heading
                    title="Image Optimizer"
                    description="Compress and optimize your images for faster web performance"
                />
            </div>
        </div>

        <div class="grid gap-6">
            <!-- Image Optimizer Component -->
            <div class="rounded-xl border bg-card p-8 shadow-sm">
                <ImageOptimizer>
                    <div class="flex flex-col items-center justify-center space-y-4">
                        <div class="size-16 rounded-full bg-blue-100 flex items-center justify-center">
                            <Image class="size-8 text-blue-600" />
                        </div>
                        <div class="text-center space-y-2">
                            <h3 class="text-lg font-semibold text-foreground">Start Optimizing</h3>
                            <p class="text-sm text-muted-foreground">
                                Upload your images to reduce file size without compromising quality
                            </p>
                        </div>
                        <button class="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
                            Optimize Image
                        </button>
                    </div>
                </ImageOptimizer>
            </div>

            <!-- Features Section -->
            <div class="grid gap-6 md:grid-cols-3">
                <div class="rounded-xl border bg-card p-6 shadow-sm">
                    <div class="size-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                        <Image class="size-5 text-blue-600" />
                    </div>
                    <h3 class="text-sm font-semibold text-foreground mb-2">Lossless Compression</h3>
                    <p class="text-sm text-muted-foreground">
                        Reduce file sizes without losing any quality
                    </p>
                </div>

                <div class="rounded-xl border bg-card p-6 shadow-sm">
                    <div class="size-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                        <Image class="size-5 text-blue-600" />
                    </div>
                    <h3 class="text-sm font-semibold text-foreground mb-2">Format Support</h3>
                    <p class="text-sm text-muted-foreground">
                        Optimize PNG, JPEG, and WebP images
                    </p>
                </div>

                <div class="rounded-xl border bg-card p-6 shadow-sm">
                    <div class="size-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                        <Image class="size-5 text-blue-600" />
                    </div>
                    <h3 class="text-sm font-semibold text-foreground mb-2">Fast Processing</h3>
                    <p class="text-sm text-muted-foreground">
                        Optimize images in seconds with our fast compression engine
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
