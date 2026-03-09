<script lang="ts">
    import Heading from '@/components/Heading.svelte';
    import ContrastChecker from '@/components/ContrastChecker.svelte';
    import { Contrast } from 'lucide-svelte';
</script>

<div class="flex min-h-screen flex-col">
    <div class="flex-1 space-y-6 p-8 pt-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="size-8 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Contrast class="size-4 text-purple-600" />
                </div>
                <Heading
                    title="Contrast Checker"
                    description="Ensure your text has sufficient color contrast for accessibility"
                />
            </div>
        </div>

        <div class="grid gap-6">
            <!-- Contrast Checker Component -->
            <div class="rounded-xl border bg-card p-8 shadow-sm">
                <ContrastChecker />
            </div>

            <!-- Features Section -->
            <div class="grid gap-6 md:grid-cols-3">
                <div class="rounded-xl border bg-card p-6 shadow-sm">
                    <div class="size-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                        <Contrast class="size-5 text-purple-600" />
                    </div>
                    <h3 class="text-sm font-semibold text-foreground mb-2">WCAG 2.1 Compliance</h3>
                    <p class="text-sm text-muted-foreground">
                        Check your contrast against WCAG 2.1 AA and AAA standards
                    </p>
                </div>
                <div class="rounded-xl border bg-card p-6 shadow-sm">
                    <div class="size-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                        <Contrast class="size-5 text-purple-600" />
                    </div>
                    <h3 class="text-sm font-semibold text-foreground mb-2">Visual Preview</h3>
                    <p class="text-sm text-muted-foreground">
                        See exactly how your text looks against different backgrounds
                    </p>
                </div>
                <div class="rounded-xl border bg-card p-6 shadow-sm">
                    <div class="size-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                        <Contrast class="size-5 text-purple-600" />
                    </div>
                    <h3 class="text-sm font-semibold text-foreground mb-2">Color Suggestions</h3>
                    <p class="text-sm text-muted-foreground">
                        Get intelligent color suggestions for better accessibility
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
