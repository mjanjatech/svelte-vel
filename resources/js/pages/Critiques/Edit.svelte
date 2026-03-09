<script lang="ts">
  import { router } from '@inertiajs/svelte';
  import AppHead from '@/components/AppHead.svelte';
  import { Button } from '@/components/ui/button';
  import { Input } from '@/components/ui/input';
  import { Label } from '@/components/ui/label';
  import { Textarea } from '@/components/ui/textarea';
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
  import AlertError from '@/components/AlertError.svelte';

  export let critique;

  let title = critique.title || '';
  let description = critique.description || '';
  let score = critique.score || null;
  let status = critique.status;
  let lead_company_name = critique.lead_company_name || '';
  let estimated_revenue_loss = critique.estimated_revenue_loss || null;
  let isSubmitting = false;

  function handleSubmit() {
    isSubmitting = true;
    router.put(`/critiques/${critique.id}`, {
      title,
      description,
      score,
      status,
      lead_company_name,
      estimated_revenue_loss,
    });
  }
</script>

<AppHead title="Edit Critique" />

<div class="flex flex-col gap-6">
  <h1 class="text-2xl font-bold text-gray-900">Edit Critique</h1>

  <AlertError />

  <Card>
    <CardHeader>
      <CardTitle>Critique Details</CardTitle>
    </CardHeader>
    <CardContent>
      <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        <div class="space-y-2">
          <Label for="url">Website URL</Label>
          <Input
            id="url"
            type="text"
            value={critique.url}
            disabled
            class="w-full bg-gray-50"
          />
        </div>

        <div class="space-y-2">
          <Label for="title">Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Add a title for this critique"
            bind:value={title}
            class="w-full"
          />
        </div>

        <div class="space-y-2">
          <Label for="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Add any additional information..."
            bind:value={description}
            class="w-full min-h-[100px]"
          />
        </div>

        <div class="space-y-2">
          <Label for="score">Score (0-100)</Label>
          <Input
            id="score"
            type="number"
            min="0"
            max="100"
            placeholder="Audit score"
            bind:value={score}
            class="w-full"
          />
        </div>

        <div class="space-y-2">
          <Label for="status">Status</Label>
          <Select bind:value={status} required>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
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
          <Button type="button" variant="outline" href={`/critiques/${critique.id}`}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting} class="bg-blue-600 hover:bg-blue-700">
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </form>
    </CardContent>
  </Card>
</div>
