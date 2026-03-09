<script lang="ts">
    import { router } from '@inertiajs/svelte';
    import AppHead from '@/components/AppHead.svelte';
    import Flame from 'lucide-svelte/icons/flame';
    import Rocket from 'lucide-svelte/icons/rocket';
    import Search from 'lucide-svelte/icons/search';
    import Loader2 from 'lucide-svelte/icons/loader-2';
    import ShieldAlert from 'lucide-svelte/icons/shield-alert';
    import Cpu from 'lucide-svelte/icons/cpu';
    import { fade, fly, slide } from 'svelte/transition';

    let url = $state('');
    let isSubmitting = $state(false);
    let statusIndex = $state(0);

    const roastStatuses = [
        "SNIFFING_OUT_2014_TRENDS",
        "JUDGING_HERO_SECTION_EGO",
        "MEASURING_BOUNCE_RATE",
        "PREPARING_BURN_UNIT",
        "CONSULTING_UX_GODS"
    ];

    function handleSubmit() {
        if (!url) return;

        // Auto-prefix protocol if missing
        let processedUrl = url.trim();
        if (!/^https?:\/\//i.test(processedUrl)) {
            processedUrl = 'https://' + processedUrl;
        }
        
        // Update the bound variable so the UI reflects the change
        url = processedUrl;
        
        isSubmitting = true;

        const interval = setInterval(() => {
            if (!isSubmitting) clearInterval(interval);
            statusIndex = (statusIndex + 1) % roastStatuses.length;
        }, 2000);

        // Send the processed URL
        router.post('/roast/pro', { url: processedUrl }, {
            onFinish: () => {
                isSubmitting = false;
                clearInterval(interval);
            },
            onError: (errors) => {
                console.error("SYS_ERR:", errors);
                isSubmitting = false;
            }
        });
    }
</script>

<AppHead title="Pro Critique | AI-Powered Website Audit" />

<div class="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center p-4 md:p-8">
    <div class="max-w-4xl w-full">
        <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Flame class="w-4 h-4" />
                PRO CRITIQUE
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                AI-Powered Website <span class="text-orange-600">Critique</span>
            </h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                Get an instant, no-holds-barred analysis of your website's design, performance, and UX
            </p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {#if isSubmitting}
                <div class="space-y-6" in:fade>
                    <div class="text-center space-y-4">
                        <div class="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full">
                            <Loader2 class="w-10 h-10 text-orange-600 animate-spin" />
                        </div>
                        <h2 class="text-2xl font-bold text-gray-900">Analyzing your website...</h2>
                        <p class="text-gray-600">
                            {roastStatuses[statusIndex]}
                        </p>
                    </div>
                </div>
            {:else}
                <form on:submit|preventDefault={handleSubmit} class="space-y-6">
                    <div class="space-y-4">
                        <label class="block text-sm font-medium text-gray-700">
                            Website URL
                        </label>
                        <div class="relative">
                            <input
                                type="url"
                                placeholder="https://example.com"
                                bind:value={url}
                                class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            <Search class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        </div>
                        <p class="text-sm text-gray-500">
                            Enter the URL of the website you want to critique
                        </p>
                    </div>

                    <button
                        type="submit"
                        class="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                        disabled={!url}
                    >
                        <Rocket class="w-5 h-5" />
                        Start Pro Critique
                    </button>
                </form>
            {/if}
        </div>

        <div class="mt-12 text-center space-y-4">
            <p class="text-sm text-gray-500">
                Pro Critique analyzes your website for:
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                <div class="flex items-center justify-center gap-2">
                    <ShieldAlert class="w-4 h-4" />
                    Security Issues
                </div>
                <div class="flex items-center justify-center gap-2">
                    <Cpu class="w-4 h-4" />
                    Performance Metrics
                </div>
                <div class="flex items-center justify-center gap-2">
                    <Search class="w-4 h-4" />
                    SEO Problems
                </div>
                <div class="flex items-center justify-center gap-2">
                    <Flame class="w-4 h-4" />
                    Design Flaws
                </div>
            </div>
        </div>
    </div>
</div>
