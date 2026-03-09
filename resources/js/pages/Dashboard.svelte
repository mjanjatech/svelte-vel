<script lang="ts">
    import AppHead from '@/components/AppHead.svelte';
    import AppLayout from '@/layouts/AppLayout.svelte';
    import { dashboard } from '@/routes';
    import critiques from '@/routes/critiques';
    import type { BreadcrumbItem } from '@/types';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Chart, Svg, Axis, Line, Area, Tooltip as TooltipNamespace, Highlight } from 'layerchart';
const Tooltip = TooltipNamespace.Root;
    import { scaleTime } from 'd3-scale';
    import { curveCardinal } from 'd3-shape';
    import { Button } from '@/components/ui/button';
    import { Plus, Eye, Edit, Trash2, BarChart3, Activity, Clock, CheckCircle, AlertCircle, Cpu, Flame } from 'lucide-svelte';

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ];

    export let totalCritiques: number = 0;
    export let pendingCritiques: number = 0;
    export let completedCritiques: number = 0;
    export let averageScore: number = 0;
    export let recentCritiques: any[] = [];
    export let performanceData: any[] = [];

    // Transform performance data to ensure date is a Date object
    $: chartData = performanceData.map(d => ({
        ...d,
        date: d.date instanceof Date ? d.date : new Date(d.date)
    }));

    function getStatusBadgeClass(status: string) {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'processing':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    }

    function getStatusIcon(status: string) {
        switch (status) {
            case 'completed':
                return CheckCircle;
            case 'pending':
                return Clock;
            case 'processing':
                return AlertCircle;
            default:
                return Activity;
        }
    }

    function getScoreColor(score: number) {
        if (score >= 80) return 'text-green-600 dark:text-green-400';
        if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
        return 'text-red-600 dark:text-red-400';
    }
</script>

<AppHead title="Dashboard" />

<AppLayout {breadcrumbs}>
    <div class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <!-- Stats Cards -->
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader class="flex flex-row items-center justify-between pb-2">
                    <CardTitle class="text-sm font-medium">Total Critiques</CardTitle>
                    <Activity class="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{totalCritiques}</div>
                    <p class="text-xs text-muted-foreground">All time critiques</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader class="flex flex-row items-center justify-between pb-2">
                    <CardTitle class="text-sm font-medium">Pending</CardTitle>
                    <Clock class="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{pendingCritiques}</div>
                    <p class="text-xs text-muted-foreground">Awaiting processing</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader class="flex flex-row items-center justify-between pb-2">
                    <CardTitle class="text-sm font-medium">Completed</CardTitle>
                    <CheckCircle class="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                    <div class="text-2xl font-bold">{completedCritiques}</div>
                    <p class="text-xs text-muted-foreground">Finished audits</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader class="flex flex-row items-center justify-between pb-2">
                    <CardTitle class="text-sm font-medium">Average Score</CardTitle>
                    <BarChart3 class="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                    <div class={`text-2xl font-bold ${getScoreColor(averageScore)}`}>
                        {averageScore}
                    </div>
                    <p class="text-xs text-muted-foreground">Out of 100</p>
                </CardContent>
            </Card>
        </div>

        <!-- Recent Critiques -->
        <Card>
            <CardHeader class="flex flex-row items-center justify-between">
                <CardTitle>Recent Critiques</CardTitle>
                <Button variant="outline" size="sm" href={critiques.index()}>
                    View All
                </Button>
            </CardHeader>
            <CardContent>
                {#if recentCritiques.length > 0}
                    <div class="overflow-hidden rounded-lg border">
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm">
                                <thead class="bg-muted/50">
                                    <tr>
                                        <th class="px-4 py-2 text-left font-medium">Project</th>
                                        <th class="px-4 py-2 text-left font-medium">Status</th>
                                        <th class="px-4 py-2 text-left font-medium">Score</th>
                                        <th class="px-4 py-2 text-left font-medium">Date</th>
                                        <th class="px-4 py-2 text-left font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {#each recentCritiques as critique}
                                        <tr class="border-t last:border-0">
                                            <td class="px-4 py-3 font-medium truncate max-w-[200px]">
                                                {critique.title || critique.url}
                                            </td>
                     <td class="px-4 py-3">
                         <span
                             class={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadgeClass(critique.status)}`}
                         >
                             <svelte:component this={getStatusIcon(critique.status)} class="mr-1 h-3 w-3" />
                             {critique.status}
                         </span>
                     </td>
                                            <td class="px-4 py-3">
                                                {#if critique.score}
                                                    <span class={`font-medium ${getScoreColor(critique.score)}`}>
                                                        {critique.score}
                                                    </span>
                                                {:else}
                                                    <span class="text-muted-foreground">-</span>
                                                {/if}
                                            </td>
                                            <td class="px-4 py-3 text-muted-foreground">
                                                {new Date(critique.created_at).toLocaleDateString()}
                                            </td>
                                            <td class="px-4 py-3">
                                                <div class="flex items-center gap-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        title="View"
                                                        href={critiques.index().url + `/${critique.id}`}
                                                    >
                                                        <Eye class="h-4 w-4" />
                                                    </Button>
                                                    {#if critique.status !== 'completed'}
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            title="Edit"
                                                            href={critiques.index().url + `/${critique.id}/edit`}
                                                        >
                                                            <Edit class="h-4 w-4" />
                                                        </Button>
                                                    {/if}
                                                </div>
                                            </td>
                                        </tr>
                                    {/each}
                                </tbody>
                            </table>
                        </div>
                    </div>
                {:else}
                    <div class="text-center py-8 text-muted-foreground">
                        No critiques yet. Create your first one to get started.
                    </div>
                {/if}
            </CardContent>
        </Card>

        <!-- Quick Actions -->
        <Card>
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
                <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Button
                        class="h-auto py-4 flex flex-col items-center gap-2"
                        href={critiques.discovery()}
                    >
                        <div class="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
                            <Plus class="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div class="text-center">
                            <div class="font-medium">New Project Discovery</div>
                            <div class="text-sm text-muted-foreground">Start with AI blueprint</div>
                        </div>
                    </Button>
                    <Button
                        class="h-auto py-4 flex flex-col items-center gap-2"
                        href={critiques.index().url + '/create'}
                    >
                        <div class="rounded-full bg-green-100 p-2 dark:bg-green-900">
                            <Eye class="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div class="text-center">
                            <div class="font-medium">Website Critique</div>
                            <div class="text-sm text-muted-foreground">Audit existing website</div>
                        </div>
                    </Button>
                    <Button
                        class="h-auto py-4 flex flex-col items-center gap-2"
                        href="/blueprint/pro"
                    >
                        <div class="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
                            <Cpu class="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div class="text-center">
                            <div class="font-medium">Pro Blueprint</div>
                            <div class="text-sm text-muted-foreground">Advanced AI architecture</div>
                        </div>
                    </Button>
                    <Button
                        class="h-auto py-4 flex flex-col items-center gap-2"
                        href="/roast/pro"
                    >
                        <div class="rounded-full bg-orange-100 p-2 dark:bg-orange-900">
                            <Flame class="h-6 w-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div class="text-center">
                            <div class="font-medium">Pro Critique</div>
                            <div class="text-sm text-muted-foreground">Deep website analysis</div>
                        </div>
                    </Button>
                </div>
            </CardContent>
        </Card>

        <!-- Performance Chart -->
        <Card>
            <CardHeader class="flex flex-row items-center justify-between">
                <CardTitle>Performance Trends</CardTitle>
                <Button variant="outline" size="sm">
                    <BarChart3 class="mr-2 h-4 w-4" />
                    View Report
                </Button>
            </CardHeader>
            <CardContent>
                <div class="h-[300px] w-full">
                    {#if performanceData.length > 0}
                        <Chart
                            data={chartData}
                            x="date"
                            xScale={scaleTime()}
                            y="avg_score"
                            yDomain={[0, 100]}
                            padding={{ left: 24, bottom: 24, right: 10, top: 10 }}
                        >
                            <Svg>
                                <Axis 
                                    placement="left" 
                                    grid={{ class: 'stroke-muted/10' }} 
                                    ticks={5} 
                                    classes={{ label: 'fill-muted-foreground text-[10px]' }}
                                />
                                <Axis 
                                    placement="bottom" 
                                    format={(d) => new Date(d).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} 
                                    ticks={5} 
                                    classes={{ label: 'fill-muted-foreground text-[10px]' }}
                                />
                                 
                                <Area 
                                    line={{ class: 'stroke-blue-500 stroke-2' }} 
                                    class="fill-blue-500/10"
                                    curve={curveCardinal} 
                                />
                                 
                                <Highlight points lines={{ class: 'stroke-blue-500' }} />
                            </Svg>
                            <Tooltip header={(d) => new Date(d.date).toLocaleDateString()} let:data>
                                <div class="p-2">
                                    <span class="font-bold">{data.avg_score.toFixed(1)}</span>
                                </div>
                            </Tooltip>
                        </Chart>
                    {:else}
                        <div class="flex h-full items-center justify-center text-muted-foreground italic">
                            No performance data available
                        </div>
                    {/if}
                </div>
                <p class="text-xs text-muted-foreground mt-2">
                    Average scores over the last 30 days
                </p>
            </CardContent>
        </Card>
    </div>
</AppLayout>
