<script lang="ts">
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { FileCode, AlertCircle, CheckCircle, RefreshCw } from 'lucide-svelte';

    let title = '';
    let description = '';
    let priority = 'medium';
    let type = 'bug';
    let loading = false;
    let success = false;
    let error: string | null = null;

    const priorities = [
        { value: 'low', label: 'Low' },
        { value: 'medium', label: 'Medium' },
        { value: 'high', label: 'High' },
        { value: 'urgent', label: 'Urgent' }
    ];

    const types = [
        { value: 'bug', label: 'Bug Report' },
        { value: 'feature', label: 'Feature Request' },
        { value: 'enhancement', label: 'Enhancement' },
        { value: 'question', label: 'Question' },
        { value: 'documentation', label: 'Documentation' }
    ];

    async function createTicket() {
        if (!title.trim() || !description.trim()) return;

        loading = true;
        error = null;
        success = false;

        try {
            const response = await fetch('/api/tools/tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
                },
                body: JSON.stringify({
                    title: title.trim(),
                    description: description.trim(),
                    priority,
                    type
                })
            });

            if (!response.ok) {
                throw new Error('Failed to create ticket');
            }

            const data = await response.json();
            success = true;
            
            title = '';
            description = '';
            priority = 'medium';
            type = 'bug';
        } catch (err: any) {
            error = err.message;
        } finally {
            loading = false;
        }
    }
</script>

<div class="space-y-8">
    <Card>
        <CardHeader>
            <CardTitle class="flex items-center gap-2">
                <FileCode class="size-5" />
                Ticket Creator
            </CardTitle>
        </CardHeader>
        <CardContent class="space-y-6">
            <div class="space-y-2">
                <Label for="title">Title</Label>
                <Input
                    id="title"
                    type="text"
                    bind:value={title}
                    placeholder="Briefly describe the issue"
                    disabled={loading}
                    class="w-full"
                />
            </div>

            <div class="space-y-2">
                <Label for="type">Type</Label>
                <div class="flex gap-2">
                    {#each types as t}
                        <button
                            type="button"
                            class={`px-3 py-1 text-sm rounded ${type === t.value ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'}`}
                            on:click={() => type = t.value}
                            disabled={loading}
                        >
                            {t.label}
                        </button>
                    {/each}
                </div>
            </div>

            <div class="space-y-2">
                <Label for="priority">Priority</Label>
                <div class="flex gap-2">
                    {#each priorities as p}
                        <button
                            type="button"
                            class={`px-3 py-1 text-sm rounded ${priority === p.value ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'}`}
                            on:click={() => priority = p.value}
                            disabled={loading}
                        >
                            {p.label}
                        </button>
                    {/each}
                </div>
            </div>

            <div class="space-y-2">
                <Label for="description">Description</Label>
                <Textarea
                    id="description"
                    bind:value={description}
                    placeholder="Provide detailed information about the issue..."
                    disabled={loading}
                    class="w-full min-h-[200px]"
                />
            </div>

            <Button
                onClick={createTicket}
                disabled={loading || !title.trim() || !description.trim()}
                class="w-full"
            >
                {#if loading}
                    <RefreshCw class="size-4 mr-2 animate-spin" />
                    Creating Ticket...
                {:else}
                    <FileCode class="size-4 mr-2" />
                    Create Ticket
                {/if}
            </Button>
        </CardContent>
    </Card>

    {#if success}
        <Card>
            <CardContent class="p-4">
                <div class="flex items-center gap-2 text-green-600">
                    <CheckCircle class="size-5" />
                    <p class="font-medium">Ticket created successfully!</p>
                </div>
            </CardContent>
        </Card>
    {/if}

    {#if error}
        <Card>
            <CardContent class="p-4">
                <div class="flex items-center gap-2 text-red-600">
                    <AlertCircle class="size-5" />
                    <p class="font-medium">{error}</p>
                </div>
            </CardContent>
        </Card>
    {/if}
</div>
