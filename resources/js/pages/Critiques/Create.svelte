<script lang="ts">
  import { router } from '@inertiajs/svelte';
  import AppHead from '@/components/AppHead.svelte';
  import { Button } from '@/components/ui/button';
  import { Input } from '@/components/ui/input';
  import { Label } from '@/components/ui/label';
  import { Textarea } from '@/components/ui/textarea';
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
  import AlertError from '@/components/AlertError.svelte';

  let url = '';
  let description = '';
  let lead_company_name = '';
  let estimated_revenue_loss = null;
  let isSubmitting = false;

  function handleSubmit() {
    isSubmitting = true;
    router.post('/critiques', {
      url,
      description,
      lead_company_name,
      estimated_revenue_loss,
    });
  }
</script>

<AppHead title="Create Critique" />

<div class="flex flex-col gap-6">
  <h1 class="text-2xl font-bold text-gray-900">Create Critique</h1>

  <AlertError />

  <Card>
    <CardHeader>
      <CardTitle>Website Information</CardTitle>
    </CardHeader>
    <CardContent>
      <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        <div class="space-y-2">
          <Label for="url">Website URL</Label>
          <Input
            id="url"
            type="url"
            placeholder="https://example.com"
            bind:value={url}
            required
            class="w-full"
          />
        </div>

        <div class="space-y-2">
          <Label for="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Add any additional information or specific areas to focus on..."
            bind:value={description}
            class="w-full min-h-[100px]"
          />
        </div>

        <div class="space-y-2">
          <Label for="lead_company_name">Company Name</Label>
          <Input
            id="lead_company_name"
            type="text"
            placeholder="Lead company name"
            bind:value={lead_company_name}
            class="w-full"
          />
        </div>

        <div class="space-y-2">
          <Label for="estimated_revenue_loss">Estimated Revenue Loss ($)</Label>
          <Input
            id="estimated_revenue_loss"
            type="number"
            min="0"
            step="0.01"
            placeholder="Estimated revenue loss"
            bind:value={estimated_revenue_loss}
            class="w-full"
          />
        </div>

        <div class="flex justify-end gap-2">
          <Button type="button" variant="outline" on:click={() => router.visit('/critiques')}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting} class="bg-blue-600 hover:bg-blue-700">
            {isSubmitting ? 'Creating...' : 'Create Critique'}
          </Button>
        </div>
      </form>
    </CardContent>
  </Card>
</div>
