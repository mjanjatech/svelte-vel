<script lang="ts">
    import Heading from '@/components/Heading.svelte';
    import ClientShare from '@/components/ClientShare.svelte';
    import { Share2, Users, Mail } from 'lucide-svelte';
</script>

<div class="flex min-h-screen flex-col">
    <div class="flex-1 space-y-6 p-8 pt-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="size-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <Share2 class="size-4 text-green-600" />
                </div>
                <Heading
                    title="Client Share"
                    description="Share critiques with clients via email"
                />
            </div>
        </div>

        <div class="grid gap-6">
            <div class="rounded-xl border bg-card p-8 shadow-sm">
                <ClientShare />
            </div>

            <div class="grid gap-6 md:grid-cols-3">
                <div class="rounded-xl border bg-card p-6 shadow-sm">
                    <div class="size-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                        <Users class="size-5 text-green-600" />
                    </div>
                    <h3 class="text-sm font-semibold text-foreground mb-2">Client Communication</h3>
                    <p class="text-sm text-muted-foreground">
                        Share critiques with clients with personalized messages
                    </p>
                </div>
                <div class="rounded-xl border bg-card p-6 shadow-sm">
                    <div class="size-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                        <Mail class="size-5 text-green-600" />
                    </div>
                    <h3 class="text-sm font-semibold text-foreground mb-2">Email Templates</h3>
                    <p class="text-sm text-muted-foreground">
                        Use preset messages for quick and professional communication
                    </p>
                </div>
                <div class="rounded-xl border bg-card p-6 shadow-sm">
                    <div class="size-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                        <Share2 class="size-5 text-green-600" />
                    </div>
                    <h3 class="text-sm font-semibold text-foreground mb-2">Shareable Links</h3>
                    <p class="text-sm text-muted-foreground">
                        Generate shareable links for easy access to critiques
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
