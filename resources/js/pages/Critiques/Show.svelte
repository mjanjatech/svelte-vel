<script lang="ts">
  import { router } from '@inertiajs/svelte';
  import AppHead from '@/components/AppHead.svelte';
  import { Plus, Edit, Trash2, ExternalLink, Copy, Lock, Unlock, Upload, MessageSquare } from 'lucide-svelte';
  import AIChat from '@/components/AIChat.svelte';
  import { Button } from '@/components/ui/button';
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
  import AlertError from '@/components/AlertError.svelte';

  export let critique;
  export let items;
  export let is_locked = false;
  export let initialInteractions = [];

  let showAddItemModal = false;
  let showUploadModal = false;
  let newItem = {
    category: 'conversion_friction',
    comment: '',
    coordinates: null,
    is_automated: false,
  };
  let uploadFile = null;

  function handleAddItem() {
    router.post(`/critiques/${critique.id}/items`, newItem);
    showAddItemModal = false;
    newItem = {
      category: 'conversion_friction',
      comment: '',
      coordinates: null,
      is_automated: false,
    };
  }

  function handleDeleteItem(itemId: number) {
    if (confirm('Are you sure you want to delete this critique item?')) {
      router.delete(`/critiques/${critique.id}/items/${itemId}`);
    }
  }

  function copyPublicUrl() {
    const publicUrl = `${window.location.origin}/critiques/${critique.id}/view?unique_id=${critique.unique_id}`;
    navigator.clipboard.writeText(publicUrl);
    alert('Public URL copied to clipboard!');
  }

  function handleUploadProposedUI() {
    if (!uploadFile) return;
    
    const formData = new FormData();
    formData.append('image', uploadFile);
    
    router.post(`/critiques/${critique.id}/upload-proposed-ui`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    showUploadModal = false;
    uploadFile = null;
  }

  function handleUnlock() {
    router.post(`/critiques/${critique.id}/unlock`);
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'conversion_friction':
        return 'text-red-600 bg-red-50';
      case 'trust_deficit':
        return 'text-orange-600 bg-orange-50';
      case 'mobile_agony':
        return 'text-yellow-600 bg-yellow-50';
      case 'seo_suicide':
        return 'text-blue-600 bg-blue-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getScoreColor = (score: number) => {
    if (score <= 40) {
      return 'text-red-600';
    } else if (score <= 70) {
      return 'text-yellow-600';
    } else {
      return 'text-green-600';
    }
  };

  const getItemBadge = (item: any) => {
    return item.is_automated 
      ? '<span class="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Data</span>' 
      : '<span class="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">Expert</span>';
  };
</script>

<AppHead title={critique.title || 'Critique'} />

<div class="flex flex-col gap-6">
  <div class="flex justify-between items-start">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">{critique.title || critique.url}</h1>
      <p class="text-gray-500 mt-1">{critique.url}</p>
    </div>
    <div class="flex gap-2">
      <Button variant="outline" size="sm" on:click={copyPublicUrl}>
        <Copy class="h-4 w-4 mr-2" />
        Copy Public URL
      </Button>
      {#if is_locked}
        <Button variant="outline" size="sm" on:click={handleUnlock}>
          <Unlock class="h-4 w-4 mr-2" />
          Unlock
        </Button>
      {/if}
      <Button as="a" href={`/critiques/${critique.id}/edit`} variant="outline" size="sm">
        <Edit class="h-4 w-4 mr-2" />
        Edit
      </Button>
    </div>
  </div>

  <AlertError />

  {#if is_locked}
    <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <div class="flex items-center gap-2">
        <Lock class="h-5 w-5 text-yellow-600" />
        <h3 class="font-semibold text-yellow-800">Critique is Locked</h3>
      </div>
      <p class="text-yellow-700 mt-2">
        This critique is currently locked. Only the first {items.length} items are visible. 
        Unlock to view all items and details.
      </p>
    </div>
  {/if}

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <Card class="lg:col-span-2">
      <CardHeader>
        <CardTitle>Screenshot Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        {#if critique.desktop_screenshot}
          <div class="relative overflow-hidden rounded-lg border">
            <img
              src={critique.desktop_screenshot}
              alt="Desktop screenshot"
              class="w-full h-auto"
            />
            {#each items as item (item.id)}
              {#if item.coordinates}
                <div
                  class="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={`left: ${item.coordinates.x}%; top: ${item.coordinates.y}%`}
                >
                  <div class={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                    item.is_automated ? 'bg-blue-500' : 'bg-purple-500'
                  }`}>
                    <div class="absolute inset-0 rounded-full animate-ping opacity-50"></div>
                  </div>
                </div>
              {/if}
            {/each}
          </div>
        {:else}
          <div class="flex items-center justify-center h-64 border-2 border-dashed rounded-lg">
            <p class="text-gray-500">No screenshot available</p>
          </div>
        {/if}

        {#if critique.proposed_ui_path}
          <div class="mt-4">
            <h4 class="text-sm font-medium text-gray-900 mb-2">Proposed UI</h4>
            <div class="relative overflow-hidden rounded-lg border">
              <img
                src={critique.proposed_ui_path}
                alt="Proposed UI"
                class="w-full h-auto"
              />
            </div>
          </div>
        {:else if !is_locked}
          <div class="mt-4">
            <Button variant="outline" size="sm" on:click={() => showUploadModal = true}>
              <Upload class="h-4 w-4 mr-2" />
              Upload Proposed UI
            </Button>
          </div>
        {/if}

        {#if !is_locked}
          <div class="mt-4 flex justify-center">
            <Button variant="outline" size="sm" on:click={() => showAddItemModal = true}>
              <Plus class="h-4 w-4 mr-2" />
              Add Critique Item
            </Button>
          </div>
        {/if}
      </CardContent>
    </Card>

    <div class="lg:col-span-1 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          {#if critique.lead_company_name}
            <div class="space-y-1">
              <p class="text-sm text-gray-500">Company</p>
              <p class="text-sm font-medium">{critique.lead_company_name}</p>
            </div>
          {/if}

          {#if critique.score !== null}
            <div class="space-y-1">
              <p class="text-sm text-gray-500">Score</p>
              <p class={`text-3xl font-bold ${getScoreColor(critique.score)}`}>
                {critique.score}/100
              </p>
              <p class="text-sm text-gray-500 capitalize">{critique.score_category}</p>
            </div>
          {/if}

          {#if critique.service_package}
            <div class="space-y-1">
              <p class="text-sm text-gray-500">Suggested Service Package</p>
              <p class="text-sm font-medium">{critique.service_package}</p>
            </div>
          {/if}

          {#if critique.estimated_revenue_loss !== null}
            <div class="space-y-1">
              <p class="text-sm text-gray-500">Estimated Revenue Loss</p>
              <p class="text-sm font-medium text-red-600">
                ${critique.estimated_revenue_loss.toLocaleString()}
              </p>
            </div>
          {/if}

          <div class="space-y-1">
            <p class="text-sm text-gray-500">Status</p>
            <p class="text-sm font-medium capitalize">{critique.status}</p>
          </div>

          <div class="space-y-1">
            <p class="text-sm text-gray-500">Created</p>
            <p class="text-sm font-medium">
              {new Date(critique.created_at).toLocaleDateString()}
            </p>
          </div>

          {#if critique.last_viewed_at}
            <div class="space-y-1">
              <p class="text-sm text-gray-500">Last Viewed</p>
              <p class="text-sm font-medium">
                {new Date(critique.last_viewed_at).toLocaleDateString()}
              </p>
            </div>
          {/if}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Critique Items ({items.length}{is_locked ? `+` : ''})</CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          {#each items as item (item.id)}
            <div class="p-4 border rounded-lg space-y-2">
              <div class="flex justify-between items-start">
                <div class="flex gap-2">
                  <span class={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(item.category)}`}>
                    {item.category_label}
                  </span>
                  {@html getItemBadge(item)}
                </div>
                {#if !is_locked}
                  <Button
                    variant="ghost"
                    size="sm"
                    on:click={() => handleDeleteItem(item.id)}
                    class="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 class="h-4 w-4" />
                  </Button>
                {/if}
              </div>
              <p class="text-sm">{item.comment}</p>
            </div>
          {/each}
          {#if is_locked}
            <div class="text-center text-gray-500 text-sm">
              + More items available when unlocked
            </div>
          {/if}
        </CardContent>
      </Card>
      
      <Card class="lg:col-span-1">
        <CardHeader>
          <CardTitle>AI Assistant</CardTitle>
        </CardHeader>
        <CardContent>
          <AIChat critiqueId={critique.id} initialInteractions={initialInteractions} />
        </CardContent>
      </Card>
    </div>
  </div>
</div>

{#if showAddItemModal}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <Card class="w-full max-w-md">
      <CardHeader>
        <CardTitle>Add Critique Item</CardTitle>
      </CardHeader>
      <CardContent>
        <form on:submit|preventDefault={handleAddItem} class="space-y-4">
          <div class="space-y-2">
            <Label for="category">Category</Label>
            <Select bind:value={newItem.category} required>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="conversion_friction">Conversion Friction</SelectItem>
                <SelectItem value="trust_deficit">Trust Deficit</SelectItem>
                <SelectItem value="mobile_agony">Mobile Agony</SelectItem>
                <SelectItem value="seo_suicide">SEO Suicide</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div class="space-y-2">
            <Label for="comment">Comment</Label>
            <Textarea
              id="comment"
              placeholder="Add your critique..."
              bind:value={newItem.comment}
              required
              class="w-full min-h-[100px]"
            />
          </div>

          <div class="flex items-center gap-2">
            <Checkbox id="is_automated" bind:checked={newItem.is_automated}>
              <Label for="is_automated" class="ml-2">Automated Item</Label>
            </Checkbox>
          </div>

          <div class="flex justify-end gap-2">
            <Button type="button" variant="outline" on:click={() => showAddItemModal = false}>
              Cancel
            </Button>
            <Button type="submit" class="bg-blue-600 hover:bg-blue-700">
              Add Item
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
{/if}

{#if showUploadModal}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <Card class="w-full max-w-md">
      <CardHeader>
        <CardTitle>Upload Proposed UI</CardTitle>
      </CardHeader>
      <CardContent>
        <form on:submit|preventDefault={handleUploadProposedUI} class="space-y-4">
          <div class="space-y-2">
            <Label for="image">Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              on:change={(e) => {
                const target = e.target as HTMLInputElement;
                uploadFile = target.files ? target.files[0] : null;
              }}
              required
              class="w-full"
            />
          </div>

          <div class="flex justify-end gap-2">
            <Button type="button" variant="outline" on:click={() => showUploadModal = false}>
              Cancel
            </Button>
            <Button type="submit" class="bg-blue-600 hover:bg-blue-700">
              Upload
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
{/if}
