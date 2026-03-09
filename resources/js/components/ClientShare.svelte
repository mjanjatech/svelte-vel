<script lang="ts">
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Share2, Copy, CheckCircle, RefreshCw, Globe, Users, Shield } from 'lucide-svelte';

    let url = '';
    let email = '';
    let message = '';
    let loading = false;
    let success = false;
    let error: string | null = null;
    let copied = false;

    const presetMessages = [
        "I've created a critique for your website. Would you like to view it?",
        "Please review the website critique I've prepared for you.",
        "I've analyzed your website. Here's the detailed report.",
        "Check out this critique I created for your website design."
    ];

    async function share() {
        if (!url || !email) return;

        loading = true;
        error = null;
        success = false;

        try {
            const response = await fetch('/api/tools/share', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
                },
                body: JSON.stringify({
                    url,
                    email,
                    message
                })
            });

            if (!response.ok) {
                throw new Error('Failed to share');
            }

            const data = await response.json();
            success = true;
            
            url = '';
            email = '';
            message = '';
        } catch (err: any) {
            error = err.message;
        } finally {
            loading = false;
        }
    }

    function copyToClipboard(text: string) {
        navigator.clipboard.writeText(text).then(() => {
            copied = true;
            setTimeout(() => copied = false, 2000);
        });
    }

    function applyPreset(preset: string) {
        message = preset;
    }

    $: shareableUrl = url ? `${window.location.origin}${url}` : '';
</script>

<div class="space-y-8">
    <Card>
        <CardHeader>
            <CardTitle class="flex items-center gap-2">
                <Share2 class="size-5" />
                Client Share
            </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
            <div class="space-y-2">
                <Label for="url">Critique URL</Label>
                <Input
                    id="url"
                    type="text"
                    bind:value={url}
                    placeholder="/critiques/123"
                    disabled={loading}
                    class="w-full"
                />
            </div>

            <div class="space-y-2">
                <Label for="email">Client Email</Label>
                <Input
                    id="email"
                    type="email"
                    bind:value={email}
                    placeholder="client@example.com"
                    disabled={loading}
                    class="w-full"
                />
            </div>

            <div class="space-y-2">
                <Label for="message">Personal Message</Label>
                <textarea
                    id="message"
                    bind:value={message}
                    placeholder="Add a personal message to your client..."
                    disabled={loading}
                    class="w-full min-h-[150px] p-3 border rounded-md"
                />
                
                <div class="flex flex-wrap gap-2 mt-2">
                    {#each presetMessages as preset}
                        <button
                            type="button"
                            on:click={() => applyPreset(preset)}
                            disabled={loading}
                            class="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
                        >
                            {preset.slice(0, 20)}...
                        </button>
                    {/each}
                </div>
            </div>

            <div class="flex gap-2">
                <Button
                    onClick={share}
                    disabled={loading || !url || !email}
                    class="flex-1"
                >
                    {#if loading}
                        <RefreshCw class="size-4 mr-2 animate-spin" />
                        Sending...
                    {:else}
                        <Share2 class="size-4 mr-2" />
                        Send Email
                    {/if}
                </Button>
            </div>
        </CardContent>
    </Card>

    {#if shareableUrl}
        <Card>
            <CardHeader>
                <CardTitle class="flex items-center gap-2">
                    <Globe class="size-5" />
                    Shareable Link
                </CardTitle>
            </CardHeader>
            <CardContent class="flex items-center gap-2">
                <Input
                    value={shareableUrl}
                    readonly
                    class="flex-1 font-mono text-sm"
                />
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(shareableUrl)}
                    disabled={loading}
                >
                    {#if copied}
                        <CheckCircle class="size-4 mr-2" />
                        Copied
                    {:else}
                        <Copy class="size-4 mr-2" />
                        Copy
                    {/if}
                </Button>
            </CardContent>
        </Card>
    {/if}

    {#if success}
        <Card>
            <CardContent class="p-4">
                <div class="flex items-center gap-2 text-green-600">
                    <CheckCircle class="size-5" />
                    <p class="font-medium">Email sent successfully!</p>
                </div>
            </CardContent>
        </Card>
    {/if}

    {#if error}
        <Card>
            <CardContent class="p-4">
                <div class="flex items-center gap-2 text-red-600">
                    <Shield class="size-5" />
                    <p class="font-medium">{error}</p>
                </div>
            </CardContent>
        </Card>
    {/if}
</div>
