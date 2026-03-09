<script lang="ts">
    import { cn } from '@/lib/utils';

    let { 
        value: _value = 0, 
        max = 100, 
        class: className = '' 
    } = $props<{
        value?: number;
        max?: number;
        class?: string;
    }>();
</script>

<div class={cn("relative w-full h-4 overflow-hidden rounded-full bg-secondary", className)}>
    {#if _value !== undefined}
        <div 
            class="h-full bg-primary transition-all duration-300 ease-out"
            style="width: {Math.min((_value / max) * 100, 100)}%"
        ></div>
    {:else}
        <div class="h-full w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer"></div>
    {/if}
</div>
