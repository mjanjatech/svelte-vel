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
            console.log('Downloading pro critique report...');
            setTimeout(() => isDownloading = false, 1000);
        } catch (error) {
            console.error('Download failed:', error);
            isDownloading = false;
        }
    }
</script>

<AppHead title="Pro Critique Report" />

<div class="min-h-screen bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 py-8">
        <!-- Header -->
        <div class="mb-8">
            <div class="flex items-center justify-between mb-4">
                <h1 class="text-3xl font-bold text-gray-900">Pro Critique Report</h1>
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
                <span>•</span>
                <span>URL: {critique.url}</span>
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
                        Comprehensive analysis of {critique.url} identifies several critical issues 
                        affecting performance, security, and user experience. Our AI has generated 
                        actionable recommendations to improve your website.
                    </p>
                    
                    <div class="grid grid-cols-3 gap-4">
                        <div class="text-center p-4 bg-blue-50 rounded-lg">
                            <div class="text-2xl font-bold text-blue-600">85</div>
                            <div class="text-sm text-blue-700">Performance Score</div>
                        </div>
                        <div class="text-center p-4 bg-green-50 rounded-lg">
                            <div class="text-2xl font-bold text-green-600">92</div>
                            <div class="text-sm text-green-700">Security Score</div>
                        </div>
                        <div class="text-center p-4 bg-yellow-50 rounded-lg">
                            <div class="text-2xl font-bold text-yellow-600">78</div>
                            <div class="text-sm text-yellow-700">UX Score</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <!-- Performance Metrics -->
            <Card>
                <CardHeader>
                    <CardTitle>Performance Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="space-y-4">
                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-sm font-medium text-gray-700">Page Load Time</span>
                                <span class="text-sm text-red-600">3.8s</span>
                            </div>
                            <Progress value={62} class="h-2" />
                            <p class="text-xs text-gray-500 mt-1">Above average load time for similar sites</p>
                        </div>

                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-sm font-medium text-gray-700">Image Optimization</span>
                                <span class="text-sm text-yellow-600">56%</span>
                            </div>
                            <Progress value={56} class="h-2" />
                            <p class="text-xs text-gray-500 mt-1">Images could be further compressed</p>
                        </div>

                        <div>
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-sm font-medium text-gray-700">Code Efficiency</span>
                                <span class="text-sm text-green-600">88%</span>
                            </div>
                            <Progress value={88} class="h-2" />
                            <p class="text-xs text-gray-500 mt-1">Excellent code structure</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <!-- Security Issues -->
            <Card>
                <CardHeader>
                    <CardTitle>Security Vulnerabilities</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="space-y-4">
                        <div class="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                            <AlertCircle class="w-5 h-5 text-red-500 flex-shrink-0" />
                            <div class="flex-1">
                                <h4 class="font-medium text-red-800">SSL Certificate Expiry</h4>
                                <p class="text-sm text-red-700">Certificate expires in 14 days</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                            <AlertCircle class="w-5 h-5 text-yellow-500 flex-shrink-0" />
                            <div class="flex-1">
                                <h4 class="font-medium text-yellow-800">Outdated Libraries</h4>
                                <p class="text-sm text-yellow-700">jQuery 3.2.1 is outdated and contains known vulnerabilities</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <!-- Recommendations -->
            <Card>
                <CardHeader>
                    <CardTitle>Actionable Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="space-y-4">
                        <div class="flex items-start gap-3">
                            <CheckCircle class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <div class="flex-1">
                                <h4 class="font-medium text-gray-900">Enable Brotli Compression</h4>
                                <p class="text-sm text-gray-600">Can reduce page weight by ~30%</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-3">
                            <CheckCircle class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <div class="flex-1">
                                <h4 class="font-medium text-gray-900">Implement Lazy Loading</h4>
                                <p class="text-sm text-gray-600">Improve initial load time for pages with many images</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-3">
                            <CheckCircle class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <div class="flex-1">
                                <h4 class="font-medium text-gray-900">Upgrade jQuery to 3.6.0</h4>
                                <p class="text-sm text-gray-600">Fixes security vulnerabilities</p>
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
                onClick={() => router.post('/roast/pro/regenerate', { critique_id: critique.id })}
            >
                <RotateCcw class="w-4 h-4 mr-2" />
                Regenerate
            </Button>
        </div>
    </div>
</div>
