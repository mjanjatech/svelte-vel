<script lang="ts">
    import { Link, page } from '@inertiajs/svelte';
    import AppHead from '@/components/AppHead.svelte';
    import { toUrl } from '@/lib/utils';
    import { dashboard, login, register } from '@/routes';
    import guest from '@/routes/guest';
    import blueprint from '@/routes/blueprint';

    let {
        canRegister = true,
    }: {
        canRegister: boolean;
    } = $props();

    const auth = $derived($page.props.auth);
</script>

<AppHead title="Roast & Redo | Digital Agency">
    <link rel="preconnect" href="https://rsms.me/" />
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</AppHead>

<div class="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="mx-auto w-full max-w-sm lg:w-96">
            <div>
                <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
                    Powered by AI
                </span>
                <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Roast <span class="text-indigo-600">&</span> Redo
                </h2>
                <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    We diagnose what's killing your conversion and build the high-performance fix.
                </p>
            </div>

            <div class="mt-8 space-y-4">
                {#if auth.user}
                    <Link
                        href={toUrl(dashboard())}
                        class="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200"
                    >
                        Go to My Dashboard
                    </Link>
                {:else}
                    <Link
                        href={toUrl(guest.roast())} 
                        class="group w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-red-600 hover:bg-red-700 transition-all duration-200 transform hover:-translate-y-1"
                    >
                        <span>Roast My Current Website</span>
                        <svg class="ml-2 w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z" />
                            <path d="M9.879 16.121A3 3 0 1012.015 11L11 14l-2.121 2.121z" />
                        </svg>
                    </Link>
                    
                    <Link
                        href={toUrl(blueprint.guest())}
                        class="w-full inline-flex justify-center items-center px-6 py-3 border-2 border-indigo-200 rounded-xl text-base font-semibold text-indigo-700 bg-white hover:bg-indigo-50 transition-all dark:bg-gray-800 dark:text-indigo-300 dark:border-indigo-900"
                    >
                        Start a New Project Blueprint
                    </Link>

                    <p class="text-center text-sm text-gray-500 mt-4">
                        Already a client? 
                        <Link href={toUrl(login())} class="font-medium text-indigo-600 underline">Log in</Link>
                    </p>
                {/if}
            </div>

            <div class="mt-10 border-t border-gray-200 pt-8 dark:border-gray-700">
                <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Trusted for 2026 Web Performance</p>
                <div class="mt-4 flex gap-4 text-gray-400">
                   <span class="text-sm">✓ M-Pesa Integrated</span>
                   <span class="text-sm">✓ AI-Driven UX</span>
                </div>
            </div>
        </div>
    </div>

    <div class="hidden lg:block relative w-0 flex-1">
        <div class="absolute inset-0 h-full w-full bg-gradient-to-br from-indigo-900 to-purple-900 opacity-20 z-10"></div>
        <div class="absolute inset-0 h-full w-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000" 
             style="background-image: url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1950&q=80')">
        </div>
        
        <div class="absolute inset-0 h-full w-full flex items-center justify-center z-20">
            <div class="max-w-md p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl text-white">
                <div class="flex items-center gap-4 mb-6">
                    <div class="bg-red-500 h-3 w-3 rounded-full"></div>
                    <span class="text-sm font-mono uppercase tracking-widest text-red-300">Live Case Study</span>
                </div>
                <h3 class="text-3xl font-bold mb-4 italic">"They found 12 friction points in our checkout. Sales went up 40%."</h3>
                <p class="text-indigo-200">— TechTrends Kenya, CEO</p>
            </div>
        </div>
    </div>
</div>