<script lang="ts">
    import type { Snippet } from 'svelte';
    import { cn } from '@/lib/utils';
    import { badgeVariants } from './index';
    import type { BadgeVariants } from './index';

    let {
        variant = 'default',
        class: className = '',
        children,
        ...rest
    }: {
        variant?: BadgeVariants['variant'];
        class?: string;
        children?: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<div data-slot="badge" class={cn(badgeVariants({ variant }), className)} {...rest}>
    {@render children?.()}
</div>
