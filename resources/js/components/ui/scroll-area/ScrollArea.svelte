<script lang="ts">
    import type { Snippet } from 'svelte';
    import { cn } from '@/lib/utils';

    let {
        class: className = '',
        children,
        ...rest
    }: {
        class?: string;
        children?: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div class={cn('relative overflow-hidden', className)} {...rest}>
    <div class="h-full w-full overflow-auto" style="scrollbar-width: thin; scrollbar-color: var(--color-muted-foreground) var(--color-background);">
        {@render children?.()}
    </div>
</div>

<style>
    :global(.dark) {
        div {
            scrollbar-color: var(--color-muted-foreground) var(--color-background);
        }
    }
    
    div::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    
    div::-webkit-scrollbar-track {
        background: var(--color-background);
    }
    
    div::-webkit-scrollbar-thumb {
        background-color: var(--color-muted-foreground);
        border-radius: 4px;
        border: 2px solid var(--color-background);
    }
    
    div::-webkit-scrollbar-thumb:hover {
        background-color: var(--color-muted-foreground);
        opacity: 0.8;
    }
</style>

