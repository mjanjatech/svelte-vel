<script lang="ts">
  import { Link, router } from '@inertiajs/svelte';
  import AppHead from '@/components/AppHead.svelte';
  import { Plus, Eye, Edit, Trash2, Clock, CheckCircle, AlertCircle } from 'lucide-svelte';
  import { Button } from '@/components/ui/button';
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
  import AlertError from '@/components/AlertError.svelte';

  export let critiques;

  function deleteCritique(id: number) {
    if (confirm('Are you sure you want to delete this critique?')) {
      router.delete(`/critiques/${id}`);
    }
  }

  function claimCritique(id: number) {
    router.post(`/critiques/${id}/claim`);
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return Clock;
      case 'processing':
        return AlertCircle;
      case 'completed':
        return CheckCircle;
      case 'draft':
        return Clock;
      default:
        return AlertCircle;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-500';
      case 'processing':
        return 'text-blue-500';
      case 'completed':
        return 'text-green-500';
      case 'draft':
        return 'text-orange-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-50';
      case 'processing':
        return 'bg-blue-50';
      case 'completed':
        return 'bg-green-50';
      case 'draft':
        return 'bg-orange-50';
      default:
        return 'bg-gray-50';
    }
  };
</script>

<AppHead title="Critiques" />

<div class="flex flex-col gap-6">
  <div class="flex justify-between items-center bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-lg border border-primary/10">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Critiques</h1>
      <p class="text-sm text-gray-500 mt-1">Manage and review your website critiques</p>
    </div>
    <a href="/critiques/create" class="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-6 py-2">
      <Plus class="h-4 w-4 mr-2" />
      Create Critique
    </a>
  </div>

  <AlertError />

  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {#each critiques.data as critique (critique.id)}
      <Card class="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-primary">
        <div class={`${getStatusBgColor(critique.status)} px-4 py-2 border-b`}>
          <div class="flex items-center gap-2">
            {#if getStatusIcon(critique.status) === Clock}
              <Clock class={`h-4 w-4 ${getStatusColor(critique.status)}`} />
            {:else if getStatusIcon(critique.status) === AlertCircle}
              <AlertCircle class={`h-4 w-4 ${getStatusColor(critique.status)}`} />
            {:else if getStatusIcon(critique.status) === CheckCircle}
              <CheckCircle class={`h-4 w-4 ${getStatusColor(critique.status)}`} />
            {/if}
            <span class={`text-xs font-medium uppercase tracking-wide ${getStatusColor(critique.status)}`}>{critique.status}</span>
          </div>
        </div>
        <CardHeader class="pb-2">
          <div class="flex justify-between items-start">
            <CardTitle class="text-sm font-medium truncate max-w-[200px] text-gray-800">
              {critique.title || critique.url}
            </CardTitle>
            {#if critique.claimed_by && critique.claimed_by !== undefined}
              <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Claimed</span>
            {:else}
              <Button
                size="sm"
                variant="outline"
                class="h-8 text-xs"
                on:click={() => claimCritique(critique.id)}
              >
                Claim
              </Button>
            {/if}
          </div>
        </CardHeader>
        <CardContent class="flex-1 flex flex-col justify-between">
          <div class="mb-4">
            <p class="text-sm text-gray-500 mb-2">
              {new Date(critique.created_at).toLocaleDateString()}
            </p>
            {#if critique.score !== null}
              <div class="flex items-center gap-2 mb-2">
                <span
                  class={`text-sm font-medium ${
                    critique.score <= 40 ? 'text-red-600' : critique.score <= 70 ? 'text-yellow-600' : 'text-green-600'
                  }`}
                >
                  Score: {critique.score}/100
                </span>
                <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    class={`h-full ${
                      critique.score <= 40 ? 'bg-red-500' : critique.score <= 70 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={`width: ${critique.score}%`}
                  ></div>
                </div>
              </div>
            {/if}
          </div>
          <div class="flex gap-2">
            <Button asChild size="sm" variant="outline">
              <Link href={`/critiques/${critique.id}`}>
                <Eye class="h-4 w-4 mr-2" />
                View
              </Link>
            </Button>
            <Button asChild size="sm" variant="outline">
              <Link href={`/critiques/${critique.id}/edit`}>
                <Edit class="h-4 w-4 mr-2" />
                Edit
              </Link>
            </Button>
            <Button variant="outline" size="sm" on:click={() => deleteCritique(critique.id)}>
              <Trash2 class="h-4 w-4 mr-2" />
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    {/each}
  </div>

  <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
    {#if critiques.links.prev}
      <Button asChild variant="outline">
        <Link href={critiques.links.prev}>Previous</Link>
      </Button>
    {:else}
      <div></div>
    {/if}
    {#if critiques.links.next}
      <Button asChild variant="outline">
        <Link href={critiques.links.next}>Next</Link>
      </Button>
    {:else}
      <div></div>
    {/if}
  </div>
</div>
