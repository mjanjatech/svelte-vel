<script lang="ts">
    import { router } from '@inertiajs/svelte';
    import AppHead from '@/components/AppHead.svelte';
    import Eye from 'lucide-svelte/icons/eye';
    import ExternalLink from 'lucide-svelte/icons/external-link';
    import Download from 'lucide-svelte/icons/download';
    import RotateCcw from 'lucide-svelte/icons/rotate-ccw';
    import Share2 from 'lucide-svelte/icons/share-2';
    import Copy from 'lucide-svelte/icons/copy';
    import CheckCircle from 'lucide-svelte/icons/check-circle';
    import AlertCircle from 'lucide-svelte/icons/alert-circle';
    import Clock from 'lucide-svelte/icons/clock';
    import X from 'lucide-svelte/icons/x';
    import Cpu from 'lucide-svelte/icons/cpu';
    import Box from 'lucide-svelte/icons/box';
    import Lightbulb from 'lucide-svelte/icons/lightbulb';
    import Zap from 'lucide-svelte/icons/zap';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Skeleton } from '@/components/ui/skeleton';
    import { Progress } from '@/components/ui/progress';

    export let critique;

    let isCopying = false;
    let isDownloading = false;

    function getStatusColor(status) {
        switch (status) {
            case 'completed':
                return 'text-green-600 bg-green-100';
            case 'processing':
                return 'text-blue-600 bg-blue-100';
            case 'failed':
                return 'text-red-600 bg-red-100';
            default:
                return 'text-gray-600 bg-gray-100';
        }
    }

    function getStatusIcon(status) {
        switch (status) {
            case 'completed':
                return CheckCircle;
            case 'processing':
                return Clock;
            case 'failed':
                return AlertCircle;
            default:
                return Eye;
        }
    }

    async function copyToClipboard(text) {
        isCopying = true;
        try {
            await navigator.clipboard.writeText(text);
            setTimeout(() => isCopying = false, 2000);
        } catch (error) {
            console.error('Failed to copy:', error);
            isCopying = false;
        }
    }

    async function downloadReport() {
        isDownloading = true;
        try {
            // In a real implementation, this would generate and download a PDF/CSV report
            console.log('Downloading pro blueprint report...');
            setTimeout(() => isDownloading = false, 1000);
        } catch (error) {
            console.error('Download failed:', error);
            isDownloading = false;
        }
    }
</script>

<AppHead title="Pro Blueprint Report" />

<div class="min-h-screen bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 py-8">
        <!-- Header -->
        <div class="mb-8">
            <div class="flex items-center justify-between mb-4">
                <h1 class="text-3xl font-bold text-gray-900">Pro Blueprint Report</h1>
                <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.history.back()}
                >
                    <X class="w-4 h-4 mr-2" />
                    Close
                </Button>
            </div>
            
            <div class="flex items-center gap-3 text-sm text-gray-600">
                <span class={`px-3 py-1 rounded-full font-medium ${getStatusColor(critique.status)}`}>
                    <svelte:component this={getStatusIcon(critique.status)} class="w-4 h-4 mr-1 inline" />
                    {critique.status}
                </span>
                <span>•</span>
                <span>{new Date(critique.created_at).toLocaleDateString()}</span>
            </div>
        </div>

        <!-- Report Sections -->
        <div class="grid gap-8">
            <!-- Executive Summary -->
            <Card>
                <CardHeader>
                    <CardTitle>Executive Summary</CardTitle>
                </CardHeader>
                <CardContent class="space-y-4">
                    <p class="text-gray-700">
                        Comprehensive architectural plan for your dream application. Our AI has 
                        designed a scalable system architecture, recommended an optimal tech stack, 
                        and created a detailed implementation roadmap.
                    </p>
                    
                    <div class="grid grid-cols-3 gap-4">
                        <div class="text-center p-4 bg-blue-50 rounded-lg">
                            <div class="text-2xl font-bold text-blue-600">4</div>
                            <div class="text-sm text-blue-700">Architecture Layers</div>
                        </div>
                        <div class="text-center p-4 bg-green-50 rounded-lg">
                            <div class="text-2xl font-bold text-green-600">12</div>
                            <div class="text-sm text-green-700">Core Features</div>
                        </div>
                        <div class="text-center p-4 bg-yellow-50 rounded-lg">
                            <div class="text-2xl font-bold text-yellow-600">6</div>
                            <div class="text-sm text-yellow-700">Months Timeline</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <!-- System Architecture -->
            <Card>
                <CardHeader>
                    <CardTitle>System Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="space-y-4">
                        <div class="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                            <Cpu class="w-5 h-5 text-blue-500 flex-shrink-0" />
                            <div class="flex-1">
                                <h4 class="font-medium text-blue-800">Microservices Architecture</h4>
                                <p class="text-sm text-blue-700">Decoupled services for scalability and maintainability</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                            <Box class="w-5 h-5 text-green-500 flex-shrink-0" />
                            <div class="flex-1">
                                <h4 class="font-medium text-green-800">Event-Driven System</h4>
                                <p class="text-sm text-green-700">Asynchronous communication between services</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                            <Zap class="w-5 h-5 text-yellow-500 flex-shrink-0" />
                            <div class="flex-1">
                                <h4 class="font-medium text-yellow-800">Real-Time Capabilities</h4>
                                <p class="text-sm text-yellow-700">WebSockets for instant updates</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <!-- Tech Stack -->
            <Card>
                <CardHeader>
                    <CardTitle>Recommended Tech Stack</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="p-4 bg-gray-50 rounded-lg text-center">
                            <div class="font-medium text-gray-900">Frontend</div>
                            <div class="text-sm text-gray-600">SvelteKit</div>
                        </div>
                        <div class="p-4 bg-gray-50 rounded-lg text-center">
                            <div class="font-medium text-gray-900">Backend</div>
                            <div class="text-sm text-gray-600">Node.js + NestJS</div>
                        </div>
                        <div class="p-4 bg-gray-50 rounded-lg text-center">
                            <div class="font-medium text-gray-900">Database</div>
                            <div class="text-sm text-gray-600">PostgreSQL + Redis</div>
                        </div>
                        <div class="p-4 bg-gray-50 rounded-lg text-center">
                            <div class="font-medium text-gray-900">Deployment</div>
                            <div class="text-sm text-gray-600">Docker + Kubernetes</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <!-- Features Roadmap -->
            <Card>
                <CardHeader>
                    <CardTitle>Features Roadmap</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="space-y-4">
                        <div class="flex items-start gap-3">
                            <CheckCircle class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <div class="flex-1">
                                <h4 class="font-medium text-gray-900">MVP Phase (Months 1-2)</h4>
                                <p class="text-sm text-gray-600">Core functionality with authentication and basic CRUD operations</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-3">
                            <CheckCircle class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <div class="flex-1">
                                <h4 class="font-medium text-gray-900">Growth Phase (Months 3-4)</h4>
                                <p class="text-sm text-gray-600">Add advanced features and optimizations</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-3">
                            <CheckCircle class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <div class="flex-1">
                                <h4 class="font-medium text-gray-900">Scaling Phase (Months 5-6)</h4>
                                <p class="text-sm text-gray-600">Implement caching, load balancing, and performance optimizations</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        <!-- Actions -->
        <div class="mt-8 flex gap-4 justify-center">
            <Button 
                variant="outline"
                onClick={() => downloadReport()}
                disabled={isDownloading}
            >
                {#if isDownloading}
                    <Clock class="w-4 h-4 mr-2 animate-spin" />
                    Downloading...
                {:else}
                    <Download class="w-4 h-4 mr-2" />
                    Download Report
                {/if}
            </Button>

            <Button 
                variant="outline"
                onClick={() => copyToClipboard(window.location.href)}
                disabled={isCopying}
            >
                {#if isCopying}
                    <CheckCircle class="w-4 h-4 mr-2" />
                    Copied!
                {:else}
                    <Copy class="w-4 h-4 mr-2" />
                    Copy Link
                {/if}
            </Button>

            <Button 
                onClick={() => router.post('/blueprint/pro/regenerate', { critique_id: critique.id })}
            >
                <RotateCcw class="w-4 h-4 mr-2" />
                Regenerate
            </Button>
        </div>
    </div>
</div>
