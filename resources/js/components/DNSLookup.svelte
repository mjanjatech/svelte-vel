<script lang="ts">
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Search, Server, Globe, Cpu, ShieldAlert, RefreshCw } from 'lucide-svelte';

    let domain = '';
    let loading = false;
    let results: any = null;
    let error: string | null = null;

    const recordTypes = [
        'A', 'AAAA', 'MX', 'CNAME', 'NS', 'PTR', 'TXT', 'SOA'
    ];

    async function performDNSLookup() {
        if (!domain) return;
        
        loading = true;
        error = null;
        results = null;

        try {
            const response = await fetch(`/api/tools/dns-lookup?domain=${encodeURIComponent(domain)}`);
            if (!response.ok) {
                throw new Error('DNS lookup failed');
            }
            const data = await response.json();
            results = data;
        } catch (err: any) {
            error = err.message;
        } finally {
            loading = false;
        }
    }

    function getRecordIcon(type: string) {
        switch (type) {
            case 'A':
            case 'AAAA':
                return Globe;
            case 'MX':
                return Server;
            case 'CNAME':
                return Cpu;
            case 'NS':
                return Server;
            case 'TXT':
                return ShieldAlert;
            default:
                return Search;
        }
    }
</script>

<div class="space-y-8">
    <Card>
        <CardHeader>
            <CardTitle class="flex items-center gap-2">
                <Search class="size-5" />
                DNS Lookup
            </CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
            <div class="space-y-2">
                <Label for="domain">Domain Name</Label>
                <div class="flex gap-2">
                    <Input 
                        id="domain"
                        type="text"
                        bind:value={domain}
                        placeholder="example.com"
                        class="flex-1"
                        disabled={loading}
                        on:keydown={(e) => e.key === 'Enter' && performDNSLookup()}
                    />
                    <Button 
                        onClick={performDNSLookup}
                        disabled={loading || !domain}
                        class="whitespace-nowrap"
                    >
                        {#if loading}
                            <RefreshCw class="size-4 mr-2 animate-spin" />
                            Looking up...
                        {:else}
                            <Search class="size-4 mr-2" />
                            Lookup DNS
                        {/if}
                    </Button>
                </div>
            </div>
        </CardContent>
    </Card>

    {#if error}
        <Card>
            <CardContent class="p-4">
                <div class="flex items-center gap-2 text-red-600">
                    <ShieldAlert class="size-5" />
                    <p class="font-medium">{error}</p>
                </div>
            </CardContent>
        </Card>
    {/if}

    {#if results}
        <Card>
            <CardHeader>
                <CardTitle class="flex items-center gap-2">
                    <Globe class="size-5" />
                    DNS Records for {domain}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {#each recordTypes as type}
                    {#if results[type]}
                        <div class="space-y-3 mb-6 last:mb-0">
                            <h3 class="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                {type} Records
                            </h3>
                            <div class="overflow-x-auto">
                                <table class="w-full border-collapse">
                                    <thead>
                                        <tr>
                                            <th class="border px-4 py-2 text-left">Type</th>
                                            <th class="border px-4 py-2 text-left">Value</th>
                                            <th class="border px-4 py-2 text-left">TTL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {#each results[type] as record}
                                            <tr>
                                                <td class="border px-4 py-2">{type}</td>
                                                <td class="border px-4 py-2 font-mono text-sm">{record.value}</td>
                                                <td class="border px-4 py-2">{record.ttl}s</td>
                                            </tr>
                                        {/each}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    {/if}
                {/each}
            </CardContent>
        </Card>
    {/if}
</div>
