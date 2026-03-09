import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ToolsController::imageOptimizer
 * @see app/Http/Controllers/ToolsController.php:0
 * @route '/tools/image-optimizer'
 */
export const imageOptimizer = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: imageOptimizer.url(options),
    method: 'get',
})

imageOptimizer.definition = {
    methods: ["get","head"],
    url: '/tools/image-optimizer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ToolsController::imageOptimizer
 * @see app/Http/Controllers/ToolsController.php:0
 * @route '/tools/image-optimizer'
 */
imageOptimizer.url = (options?: RouteQueryOptions) => {
    return imageOptimizer.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ToolsController::imageOptimizer
 * @see app/Http/Controllers/ToolsController.php:0
 * @route '/tools/image-optimizer'
 */
imageOptimizer.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: imageOptimizer.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ToolsController::imageOptimizer
 * @see app/Http/Controllers/ToolsController.php:0
 * @route '/tools/image-optimizer'
 */
imageOptimizer.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: imageOptimizer.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ToolsController::imageOptimizer
 * @see app/Http/Controllers/ToolsController.php:0
 * @route '/tools/image-optimizer'
 */
    const imageOptimizerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: imageOptimizer.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ToolsController::imageOptimizer
 * @see app/Http/Controllers/ToolsController.php:0
 * @route '/tools/image-optimizer'
 */
        imageOptimizerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: imageOptimizer.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ToolsController::imageOptimizer
 * @see app/Http/Controllers/ToolsController.php:0
 * @route '/tools/image-optimizer'
 */
        imageOptimizerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: imageOptimizer.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    imageOptimizer.form = imageOptimizerForm
/**
* @see \App\Http\Controllers\ToolsController::optimizeImage
 * @see app/Http/Controllers/ToolsController.php:89
 * @route '/api/tools/optimize-image'
 */
export const optimizeImage = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: optimizeImage.url(options),
    method: 'post',
})

optimizeImage.definition = {
    methods: ["post"],
    url: '/api/tools/optimize-image',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ToolsController::optimizeImage
 * @see app/Http/Controllers/ToolsController.php:89
 * @route '/api/tools/optimize-image'
 */
optimizeImage.url = (options?: RouteQueryOptions) => {
    return optimizeImage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ToolsController::optimizeImage
 * @see app/Http/Controllers/ToolsController.php:89
 * @route '/api/tools/optimize-image'
 */
optimizeImage.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: optimizeImage.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ToolsController::optimizeImage
 * @see app/Http/Controllers/ToolsController.php:89
 * @route '/api/tools/optimize-image'
 */
    const optimizeImageForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: optimizeImage.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ToolsController::optimizeImage
 * @see app/Http/Controllers/ToolsController.php:89
 * @route '/api/tools/optimize-image'
 */
        optimizeImageForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: optimizeImage.url(options),
            method: 'post',
        })
    
    optimizeImage.form = optimizeImageForm
/**
* @see \App\Http\Controllers\ToolsController::contrastChecker
 * @see app/Http/Controllers/ToolsController.php:17
 * @route '/tools/contrast-checker'
 */
export const contrastChecker = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contrastChecker.url(options),
    method: 'get',
})

contrastChecker.definition = {
    methods: ["get","head"],
    url: '/tools/contrast-checker',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ToolsController::contrastChecker
 * @see app/Http/Controllers/ToolsController.php:17
 * @route '/tools/contrast-checker'
 */
contrastChecker.url = (options?: RouteQueryOptions) => {
    return contrastChecker.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ToolsController::contrastChecker
 * @see app/Http/Controllers/ToolsController.php:17
 * @route '/tools/contrast-checker'
 */
contrastChecker.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contrastChecker.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ToolsController::contrastChecker
 * @see app/Http/Controllers/ToolsController.php:17
 * @route '/tools/contrast-checker'
 */
contrastChecker.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contrastChecker.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ToolsController::contrastChecker
 * @see app/Http/Controllers/ToolsController.php:17
 * @route '/tools/contrast-checker'
 */
    const contrastCheckerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contrastChecker.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ToolsController::contrastChecker
 * @see app/Http/Controllers/ToolsController.php:17
 * @route '/tools/contrast-checker'
 */
        contrastCheckerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contrastChecker.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ToolsController::contrastChecker
 * @see app/Http/Controllers/ToolsController.php:17
 * @route '/tools/contrast-checker'
 */
        contrastCheckerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contrastChecker.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contrastChecker.form = contrastCheckerForm
/**
* @see \App\Http\Controllers\ToolsController::dnsLookup
 * @see app/Http/Controllers/ToolsController.php:25
 * @route '/tools/dns-lookup'
 */
export const dnsLookup = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dnsLookup.url(options),
    method: 'get',
})

dnsLookup.definition = {
    methods: ["get","head"],
    url: '/tools/dns-lookup',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ToolsController::dnsLookup
 * @see app/Http/Controllers/ToolsController.php:25
 * @route '/tools/dns-lookup'
 */
dnsLookup.url = (options?: RouteQueryOptions) => {
    return dnsLookup.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ToolsController::dnsLookup
 * @see app/Http/Controllers/ToolsController.php:25
 * @route '/tools/dns-lookup'
 */
dnsLookup.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dnsLookup.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ToolsController::dnsLookup
 * @see app/Http/Controllers/ToolsController.php:25
 * @route '/tools/dns-lookup'
 */
dnsLookup.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dnsLookup.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ToolsController::dnsLookup
 * @see app/Http/Controllers/ToolsController.php:25
 * @route '/tools/dns-lookup'
 */
    const dnsLookupForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dnsLookup.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ToolsController::dnsLookup
 * @see app/Http/Controllers/ToolsController.php:25
 * @route '/tools/dns-lookup'
 */
        dnsLookupForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dnsLookup.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ToolsController::dnsLookup
 * @see app/Http/Controllers/ToolsController.php:25
 * @route '/tools/dns-lookup'
 */
        dnsLookupForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dnsLookup.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dnsLookup.form = dnsLookupForm
/**
* @see \App\Http\Controllers\ToolsController::performDnsLookup
 * @see app/Http/Controllers/ToolsController.php:33
 * @route '/api/tools/dns-lookup'
 */
export const performDnsLookup = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: performDnsLookup.url(options),
    method: 'get',
})

performDnsLookup.definition = {
    methods: ["get","head"],
    url: '/api/tools/dns-lookup',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ToolsController::performDnsLookup
 * @see app/Http/Controllers/ToolsController.php:33
 * @route '/api/tools/dns-lookup'
 */
performDnsLookup.url = (options?: RouteQueryOptions) => {
    return performDnsLookup.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ToolsController::performDnsLookup
 * @see app/Http/Controllers/ToolsController.php:33
 * @route '/api/tools/dns-lookup'
 */
performDnsLookup.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: performDnsLookup.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ToolsController::performDnsLookup
 * @see app/Http/Controllers/ToolsController.php:33
 * @route '/api/tools/dns-lookup'
 */
performDnsLookup.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: performDnsLookup.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ToolsController::performDnsLookup
 * @see app/Http/Controllers/ToolsController.php:33
 * @route '/api/tools/dns-lookup'
 */
    const performDnsLookupForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: performDnsLookup.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ToolsController::performDnsLookup
 * @see app/Http/Controllers/ToolsController.php:33
 * @route '/api/tools/dns-lookup'
 */
        performDnsLookupForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: performDnsLookup.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ToolsController::performDnsLookup
 * @see app/Http/Controllers/ToolsController.php:33
 * @route '/api/tools/dns-lookup'
 */
        performDnsLookupForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: performDnsLookup.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    performDnsLookup.form = performDnsLookupForm
const ToolsController = { imageOptimizer, optimizeImage, contrastChecker, dnsLookup, performDnsLookup }

export default ToolsController