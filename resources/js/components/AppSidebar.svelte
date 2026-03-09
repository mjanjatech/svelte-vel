<script lang="ts">
    import { Link, page } from '@inertiajs/svelte';
    import * as Sidebar from '@/components/ui/sidebar';
    import * as Collapsible from '@/components/ui/collapsible';
    import { ChevronRight, LayoutGrid, FileText, Zap, Smartphone, Search, Image, Eye, Palette, Cpu, Code, Dna, FileCode, Share2, FolderGit2, BookOpen } from 'lucide-svelte';

    // Components
    import AppLogo from '@/components/AppLogo.svelte';
    import NavUser from '@/components/NavUser.svelte';
    import NavFooter from '@/components/NavFooter.svelte';
    
    // Tool Wrappers
    import LighthouseModal from '@/components/LighthouseModal.svelte';
    import ResponsiveSandbox from '@/components/ResponsiveSandbox.svelte';
    import SEOChecker from '@/components/SEOChecker.svelte';
    import ImageOptimizer from '@/components/ImageOptimizer.svelte';
    import ContrastChecker from '@/components/ContrastChecker.svelte';
    import DNSLookup from '@/components/DNSLookup.svelte';
    import TicketCreator from '@/components/TicketCreator.svelte';
    import ClientShare from '@/components/ClientShare.svelte';

    // Define TypeScript types for menu items
    type MenuItemWithHref = {
        id: string;
        title: string;
        href: string;
        icon: any;
        component?: never;
    };

    type MenuItemWithComponent = {
        id: string;
        title: string;
        href?: never;
        icon: any;
        component: any;
    };

    type MenuItem = MenuItemWithHref | MenuItemWithComponent;

    type ToolGroup = {
        label: string;
        color: string;
        items: MenuItem[];
    };

    type MenuConfig = {
        platform: MenuItemWithHref[];
        toolGroups: ToolGroup[];
        footer: MenuItemWithHref[];
    };

    // 1. Define the Navigation Structure
    const menuConfig: MenuConfig = {
        platform: [
            { id: 'dashboard', title: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
            { id: 'critiques', title: 'Critiques', href: '/critiques', icon: FileText },
        ],
        toolGroups: [
            {
                label: 'Live Audit Suite',
                color: 'text-amber-500',
                items: [
                    { id: 'lighthouse', title: 'Lighthouse Scan', icon: Zap, component: LighthouseModal },
                    { id: 'responsive', title: 'Responsive Checker', icon: Smartphone, component: ResponsiveSandbox },
                    { id: 'seo', title: 'SEO Checker', icon: Search, component: SEOChecker },
                ]
            },
            {
                label: 'Assets & Optimization',
                color: 'text-blue-500',
                items: [
                    { id: 'img-opt', title: 'Image Optimizer', icon: Image, component: ImageOptimizer },
                    { id: 'contrast', title: 'Contrast Checker', icon: Eye, component: ContrastChecker },
                ]
            },
            {
                label: 'Developer & Project',
                color: 'text-purple-500',
                items: [
                    { id: 'dns', title: 'DNS Lookup', icon: Cpu, component: DNSLookup },
                    { id: 'tickets', title: 'Ticket Creator', icon: FileCode, component: TicketCreator },
                    { id: 'share', title: 'Client Share', icon: Share2, component: ClientShare },
                ]
            }
        ],
        footer: [
            { id: 'repo', title: 'Repository', href: '#', icon: FolderGit2 },
            { id: 'docs', title: 'Documentation', href: '#', icon: BookOpen },
        ]
    };
</script>

<Sidebar.Root collapsible="icon" variant="inset" class="border-r">
    <Sidebar.Header>
        <Sidebar.Menu>
            <Sidebar.MenuItem>
                <Sidebar.MenuButton size="lg" asChild>
                    {#snippet children(props)}
                        <Link {...props} href="/dashboard" class="flex items-center gap-3">
                            <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                <AppLogo className="size-5" />
                            </div>
                            <div class="grid flex-1 text-left text-sm leading-tight">
                                <span class="truncate font-semibold">DevAudit Pro</span>
                                <span class="truncate text-xs text-muted-foreground">Enterprise Plan</span>
                            </div>
                        </Link>
                    {/snippet}
                </Sidebar.MenuButton>
            </Sidebar.MenuItem>
        </Sidebar.Menu>
    </Sidebar.Header>

    <Sidebar.Content>
        <Sidebar.Group>
            <Sidebar.GroupLabel>Platform</Sidebar.GroupLabel>
            <Sidebar.Menu>
                {#each menuConfig.platform as item}
                    <Sidebar.MenuItem>
                        <Sidebar.MenuButton asChild isActive={$page.url === item.href} tooltip={item.title}>
                            {#snippet children(props)}
                                <Link {...props} href={item.href}>
                                    <item.icon class="size-4" />
                                    <span>{item.title}</span>
                                </Link>
                            {/snippet}
                        </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                {/each}
            </Sidebar.Menu>
        </Sidebar.Group>

        {#each menuConfig.toolGroups as group}
            <Collapsible.Root open class="group/collapsible">
                <Sidebar.Group>
                    <Sidebar.GroupLabel asChild>
                        <Collapsible.Trigger class="flex w-full items-center text-xs font-medium uppercase tracking-wider text-muted-foreground/70 hover:text-foreground">
                            {group.label}
                            <ChevronRight class="ml-auto size-3 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </Collapsible.Trigger>
                    </Sidebar.GroupLabel>
                    <Collapsible.Content>
                        <Sidebar.Menu>
                            {#each group.items as item}
                                <Sidebar.MenuItem>
                                    {#if item.component}
                                        <item.component>
                                            <Sidebar.MenuButton tooltip={item.title}>
                                                {#snippet children(props)}
                                                    <button {...props} class="flex w-full items-center gap-2 outline-none">
                                                        <item.icon class="size-4 shrink-0 opacity-60 {group.color}" />
                                                        <span class="truncate">{item.title}</span>
                                                    </button>
                                                {/snippet}
                                            </Sidebar.MenuButton>
                                        </item.component>
                                    {:else}
                                        <Sidebar.MenuButton asChild tooltip={item.title} isActive={$page.url === item.href}>
                                            {#snippet children(props)}
                                                <Link {...props} href={item.href}>
                                                    <item.icon class="size-4 shrink-0 opacity-60 {group.color}" />
                                                    <span>{item.title}</span>
                                                </Link>
                                            {/snippet}
                                        </Sidebar.MenuButton>
                                    {/if}
                                </Sidebar.MenuItem>
                            {/each}
                        </Sidebar.Menu>
                    </Collapsible.Content>
                </Sidebar.Group>
            </Collapsible.Root>
        {/each}
    </Sidebar.Content>

    <Sidebar.Footer class="p-4">
        <NavFooter items={menuConfig.footer} />
        <div class="mt-4 border-t pt-4">
            <NavUser />
        </div>
    </Sidebar.Footer>
</Sidebar.Root>