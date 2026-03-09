<script lang="ts">
    import { cn } from '@/lib/utils';

    let { 
        class: className = '', 
        type = 'text', 
        value: _value = $bindable(),
        onInput,
        ...rest 
    } = $props<{
        class?: string;
        type?: string;
        value?: any;
        onInput?: (event: Event) => void;
        [key: string]: any;
    }>();

    function handleInput(event: Event) {
        _value = (event.target as HTMLInputElement).value;
        onInput?.(event);
    }
</script>

<input
    type={type}
    value={_value}
    oninput={handleInput}
    class={cn(
        'flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
    )}
    {...rest}
 />
