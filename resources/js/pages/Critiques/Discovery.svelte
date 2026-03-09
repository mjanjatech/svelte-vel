<script lang="ts">
  import { router } from '@inertiajs/svelte';
  import AppHead from '@/components/AppHead.svelte';
  import { ChevronRight, ChevronLeft } from 'lucide-svelte';
  import { Button } from '@/components/ui/button';
  import { Input } from '@/components/ui/input';
  import { Textarea } from '@/components/ui/textarea';
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
  
  let currentStep = 0;
  
  const formData = {
    industry: '',
    vision: '',
    competitor_url: '',
  };
  
  const industries = [
    'E-commerce',
    'School Management',
    'Fintech',
    'Healthcare',
    'Real Estate',
    'Hospitality',
    'Logistics',
    'Agriculture',
    'Entertainment',
    'Other',
  ];
  
  function handleNext() {
    if (currentStep === 0 && !formData.industry) {
      alert('Please select an industry');
      return;
    }
    
    if (currentStep === 1 && !formData.vision) {
      alert('Please describe your vision');
      return;
    }
    
    currentStep++;
  }
  
  function handlePrevious() {
    currentStep--;
  }
</script>

<AppHead title="Project Discovery" />

<div class="flex flex-col gap-6">
  <div class="flex justify-between items-start">
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Project Discovery</h1>
      <p class="text-gray-500 mt-1">Tell us about your vision, and we'll create a blueprint for your dream app.</p>
    </div>
  </div>
  
  <Card>
    <CardHeader>
      <CardTitle>Step {currentStep + 1} of 3</CardTitle>
    </CardHeader>
    <CardContent>
      {#if currentStep === 0}
        <div class="space-y-4">
          <h2 class="text-lg font-medium">What industry are you in?</h2>
          <Select bind:value={formData.industry} placeholder="Select your industry">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {#each industries as industry}
                <SelectItem value={industry}>{industry}</SelectItem>
              {/each}
            </SelectContent>
          </Select>
        </div>
      {:else if currentStep === 1}
        <div class="space-y-4">
          <h2 class="text-lg font-medium">Describe your vision</h2>
          <Textarea 
            placeholder="What do you want your app to achieve? Who are your target users? What makes you unique?" 
            bind:value={formData.vision} 
            class="h-40"
          />
        </div>
      {:else}
        <div class="space-y-4">
          <h2 class="text-lg font-medium">Do you have a competitor you admire or want to outperform?</h2>
          <Input 
            type="url" 
            placeholder="https://competitor.com" 
            bind:value={formData.competitor_url} 
          />
          <p class="text-sm text-gray-500">Don't worry if you don't have one - we'll create a custom blueprint just for you.</p>
        </div>
      {/if}
      
      <div class="flex justify-between mt-6">
        <Button 
          variant="outline" 
          on:click={handlePrevious} 
          disabled={currentStep === 0}
        >
          <ChevronLeft class="h-4 w-4 mr-2" />
          Previous
        </Button>
        
        {#if currentStep < 2}
          <Button on:click={handleNext}>
            Next
            <ChevronRight class="h-4 w-4 ml-2" />
          </Button>
        {:else}
          <Button on:click={() => router.visit('/critiques/discovery/store', {
            method: 'post',
            data: formData,
          })}>
            Create Blueprint
          </Button>
        {/if}
      </div>
    </CardContent>
  </Card>
  
  <Card>
    <CardHeader>
      <CardTitle>Progress</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div 
          class="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={`width: ${((currentStep + 1) / 3) * 100}%`}
        ></div>
      </div>
    </CardContent>
  </Card>
</div>
