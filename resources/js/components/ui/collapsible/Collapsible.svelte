<script lang="ts">
    import type { Snippet } from 'svelte';

    let {
        open = $bindable(false),
        disabled = false,
        children,
        class: className,
    }: {
        open?: boolean;
        disabled?: boolean;
        children?: Snippet;
        class?: string;
    } = $props();
</script>

<div data-slot="collapsible" data-state={open ? 'open' : 'closed'} data-disabled={disabled || undefined} class={className}>
    {@render children?.()}
</div>
