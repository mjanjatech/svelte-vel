<script lang="ts">
    import Heading from '@/components/Heading.svelte';
    import DNSLookup from '@/components/DNSLookup.svelte';
    import { Globe, Search } from 'lucide-svelte';
</script>

<div class="flex min-h-screen flex-col">
    <div class="flex-1 space-y-6 p-8 pt-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="size-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Globe class="size-4 text-blue-600" />
                </div>
                <Heading
                    title="DNS Lookup"
                    description="Perform DNS lookups for any domain name"
                />
            </div>
        </div>

        <div class="grid gap-6">
            <div class="rounded-xl border bg-card p-8 shadow-sm">
                <DNSLookup />
            </div>

            <div class="grid gap-6 md:grid-cols-3">
                <div class="rounded-xl border bg-card p-6 shadow-sm">
                    <div class="size-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                        <Search class="size-5 text-blue-600" />
                    </div>
                    <h3 class="text-sm font-semibold text-foreground mb-2">DNS Record Types</h3>
                    <p class="text-sm text-muted-foreground">
                        Look up A, AAAA, MX, CNAME, NS, PTR, TXT, and SOA records
                    </p>
                </div>
                <div class="rounded-xl border bg-card p-6 shadow-sm">
                    <div class="size-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                        <Globe class="size-5 text-blue-600" />
                    </div>
                    <h3 class="text-sm font-semibold text-foreground mb-2">Real-time Results</h3>
                    <p class="text-sm text-muted-foreground">
                        Get real-time DNS resolution data from authoritative servers
                    </p>
                </div>
                <div class="rounded-xl border bg-card p-6 shadow-sm">
                    <div class="size-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                        <Search class="size-5 text-blue-600" />
                    </div>
                    <h3 class="text-sm font-semibold text-foreground mb-2">Comprehensive Information</h3>
                    <p class="text-sm text-muted-foreground">
                        View complete DNS information including TTL values and record details
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
