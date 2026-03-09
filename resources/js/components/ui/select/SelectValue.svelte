<script lang="ts">
	let {
		placeholder,
		children,
	}: {
		placeholder?: string;
		children?: any;
	} = $props();
</script>

<span data-slot="select-value">
	{@render children?.()}
</span>
