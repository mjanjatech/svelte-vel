<script lang="ts">
    import AppHead from '@/components/AppHead.svelte';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent } from '@/components/ui/card';
    import { Flame, ArrowLeft, AlertTriangle, Zap, Ghost } from 'lucide-svelte';

    // Props passed from your Laravel/Inertia controller
    export let url: string;
    export let roast: string; // The AI generated text
    export let score: number = 34; // Example score out of 100
</script>

<AppHead title="The Verdict" />

<div class="min-h-screen bg-zinc-950 text-zinc-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full"></div>
    <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-zinc-800/20 blur-[120px] rounded-full"></div>

    <div class="max-w-3xl mx-auto relative z-10">
        
        <div class="flex items-center justify-between mb-8">
            <a href="/" class="text-zinc-500 hover:text-white flex items-center gap-2 transition-colors">
                <ArrowLeft size={16} /> 
                <span class="text-sm font-medium">Try another site</span>
            </a>
            <div class="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                Report ID: {Math.random().toString(36).substr(2, 9)}
            </div>
        </div>

        <section class="mb-12 text-center">
            <div class="inline-block relative mb-6">
                <div class="text-7xl font-black text-white md:text-8xl">
                    {score}<span class="text-red-600 text-4xl">/100</span>
                </div>
                <div class="absolute -top-4 -right-8 rotate-12 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg">
                    CRINGE DETECTED
                </div>
            </div>
            <h1 class="text-2xl font-bold text-white mb-2">The Verdict for <span class="underline decoration-red-600">{new URL(url).hostname}</span></h1>
            <p class="text-zinc-400">Our AI has finished judging your life choices. It's not looking good.</p>
        </section>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card class="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                <CardContent class="p-4 flex items-center gap-4">
                    <div class="p-2 bg-orange-500/10 text-orange-500 rounded-lg"><Zap size={20}/></div>
                    <div>
                        <p class="text-xs text-zinc-500 uppercase font-bold">UX Lethality</p>
                        <p class="text-xl font-mono text-white">Critical</p>
                    </div>
                </CardContent>
            </Card>
            <Card class="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                <CardContent class="p-4 flex items-center gap-4">
                    <div class="p-2 bg-red-500/10 text-red-500 rounded-lg"><AlertTriangle size={20}/></div>
                    <div>
                        <p class="text-xs text-zinc-500 uppercase font-bold">SEO Despair</p>
                        <p class="text-xl font-mono text-white">9/10</p>
                    </div>
                </CardContent>
            </Card>
            <Card class="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                <CardContent class="p-4 flex items-center gap-4">
                    <div class="p-2 bg-purple-500/10 text-purple-500 rounded-lg"><Ghost size={20}/></div>
                    <div>
                        <p class="text-xs text-zinc-500 uppercase font-bold">Ego Damage</p>
                        <p class="text-xl font-mono text-white">Severe</p>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div class="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            <div class="bg-zinc-800/50 px-6 py-3 border-b border-zinc-800 flex items-center gap-2">
                <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div class="w-3 h-3 rounded-full bg-orange-500/50"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <span class="text-xs font-mono text-zinc-500 ml-2 italic">analysis_output.log</span>
            </div>
            <div class="p-8 md:p-10 prose prose-invert max-w-none">
                <div class="font-mono text-red-500 mb-4 flex items-center gap-2">
                    <Flame size={18} /> <span>GENERATED ROAST:</span>
                </div>
                <p class="text-lg leading-relaxed text-zinc-200 whitespace-pre-wrap">
                    {roast}
                </p>
            </div>
        </div>

        <div class="mt-12 text-center space-y-6">
            <p class="text-zinc-500 text-sm italic">"I've seen GeoCities sites with more charisma than this." — The AI</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" class="border-zinc-800 bg-transparent hover:bg-zinc-900 text-white rounded-xl px-8 py-6">
                    Download Shame PDF
                </Button>
                <Button class="bg-red-600 hover:bg-red-500 text-white rounded-xl px-8 py-6 font-bold shadow-lg shadow-red-900/20">
                    Share on X (Twitter)
                </Button>
            </div>
        </div>
    </div>
</div>

<style>
    /* Add a subtle scanline effect to the roast box */
    .prose {
        background: linear-gradient(
            rgba(18, 18, 18, 0) 50%, 
            rgba(0, 0, 0, 0.05) 50%
        );
        background-size: 100% 4px;
    }
</style>