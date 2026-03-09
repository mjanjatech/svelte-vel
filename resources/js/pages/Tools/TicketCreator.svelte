<script lang="ts">
    import Heading from '@/components/Heading.svelte';
    import TicketCreator from '@/components/TicketCreator.svelte';
    import { FileCode, FileText } from 'lucide-svelte';
</script>

<div class="flex min-h-screen flex-col">
    <div class="flex-1 space-y-6 p-8 pt-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="size-8 rounded-lg bg-purple-100 flex items-center justify-center">
                    <FileCode class="size-4 text-purple-600" />
                </div>
                <Heading
                    title="Ticket Creator"
                    description="Create bug reports and feature requests"
                />
            </div>
        </div>

        <div class="grid gap-6">
            <div class="rounded-xl border bg-card p-8 shadow-sm">
                <TicketCreator />
            </div>

            <div class="grid gap-6 md:grid-cols-3">
                <div class="rounded-xl border bg-card p-6 shadow-sm">
                    <div class="size-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                        <FileText class="size-5 text-purple-600" />
                    </div>
                    <h3 class="text-sm font-semibold text-foreground mb-2">Bug Reports</h3>
                    <p class="text-sm text-muted-foreground">
                        Report issues with detailed steps to reproduce and screenshots
                    </p>
                </div>
                <div class="rounded-xl border bg-card p-6 shadow-sm">
                    <div class="size-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                        <FileCode class="size-5 text-purple-600" />
                    </div>
                    <h3 class="text-sm font-semibold text-foreground mb-2">Feature Requests</h3>
                    <p class="text-sm text-muted-foreground">
                        Suggest new features and improvements with use cases
                    </p>
                </div>
                <div class="rounded-xl border bg-card p-6 shadow-sm">
                    <div class="size-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                        <FileText class="size-5 text-purple-600" />
                    </div>
                    <h3 class="text-sm font-semibold text-foreground mb-2">Prioritization</h3>
                    <p class="text-sm text-muted-foreground">
                        Set priorities from urgent to low for proper issue tracking
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
