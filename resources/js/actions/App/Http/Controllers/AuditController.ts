import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuditController::scrape
 * @see app/Http/Controllers/AuditController.php:14
 * @route '/api/audit/scrape'
 */
export const scrape = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: scrape.url(options),
    method: 'post',
})

scrape.definition = {
    methods: ["post"],
    url: '/api/audit/scrape',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditController::scrape
 * @see app/Http/Controllers/AuditController.php:14
 * @route '/api/audit/scrape'
 */
scrape.url = (options?: RouteQueryOptions) => {
    return scrape.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditController::scrape
 * @see app/Http/Controllers/AuditController.php:14
 * @route '/api/audit/scrape'
 */
scrape.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: scrape.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditController::scrape
 * @see app/Http/Controllers/AuditController.php:14
 * @route '/api/audit/scrape'
 */
    const scrapeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: scrape.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditController::scrape
 * @see app/Http/Controllers/AuditController.php:14
 * @route '/api/audit/scrape'
 */
        scrapeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: scrape.url(options),
            method: 'post',
        })
    
    scrape.form = scrapeForm
/**
* @see \App\Http\Controllers\AuditController::seoStatus
 * @see app/Http/Controllers/AuditController.php:37
 * @route '/api/audit/seo-status/{id}'
 */
export const seoStatus = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: seoStatus.url(args, options),
    method: 'get',
})

seoStatus.definition = {
    methods: ["get","head"],
    url: '/api/audit/seo-status/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditController::seoStatus
 * @see app/Http/Controllers/AuditController.php:37
 * @route '/api/audit/seo-status/{id}'
 */
seoStatus.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return seoStatus.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditController::seoStatus
 * @see app/Http/Controllers/AuditController.php:37
 * @route '/api/audit/seo-status/{id}'
 */
seoStatus.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: seoStatus.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditController::seoStatus
 * @see app/Http/Controllers/AuditController.php:37
 * @route '/api/audit/seo-status/{id}'
 */
seoStatus.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: seoStatus.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditController::seoStatus
 * @see app/Http/Controllers/AuditController.php:37
 * @route '/api/audit/seo-status/{id}'
 */
    const seoStatusForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: seoStatus.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditController::seoStatus
 * @see app/Http/Controllers/AuditController.php:37
 * @route '/api/audit/seo-status/{id}'
 */
        seoStatusForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: seoStatus.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditController::seoStatus
 * @see app/Http/Controllers/AuditController.php:37
 * @route '/api/audit/seo-status/{id}'
 */
        seoStatusForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: seoStatus.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    seoStatus.form = seoStatusForm
/**
* @see \App\Http\Controllers\AuditController::analyzePageSpeed
 * @see app/Http/Controllers/AuditController.php:50
 * @route '/api/audit/analyze-page-speed'
 */
export const analyzePageSpeed = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: analyzePageSpeed.url(options),
    method: 'post',
})

analyzePageSpeed.definition = {
    methods: ["post"],
    url: '/api/audit/analyze-page-speed',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuditController::analyzePageSpeed
 * @see app/Http/Controllers/AuditController.php:50
 * @route '/api/audit/analyze-page-speed'
 */
analyzePageSpeed.url = (options?: RouteQueryOptions) => {
    return analyzePageSpeed.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditController::analyzePageSpeed
 * @see app/Http/Controllers/AuditController.php:50
 * @route '/api/audit/analyze-page-speed'
 */
analyzePageSpeed.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: analyzePageSpeed.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuditController::analyzePageSpeed
 * @see app/Http/Controllers/AuditController.php:50
 * @route '/api/audit/analyze-page-speed'
 */
    const analyzePageSpeedForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: analyzePageSpeed.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuditController::analyzePageSpeed
 * @see app/Http/Controllers/AuditController.php:50
 * @route '/api/audit/analyze-page-speed'
 */
        analyzePageSpeedForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: analyzePageSpeed.url(options),
            method: 'post',
        })
    
    analyzePageSpeed.form = analyzePageSpeedForm
/**
* @see \App\Http\Controllers\AuditController::status
 * @see app/Http/Controllers/AuditController.php:70
 * @route '/api/audit/status/{id}'
 */
export const status = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})

status.definition = {
    methods: ["get","head"],
    url: '/api/audit/status/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AuditController::status
 * @see app/Http/Controllers/AuditController.php:70
 * @route '/api/audit/status/{id}'
 */
status.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return status.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuditController::status
 * @see app/Http/Controllers/AuditController.php:70
 * @route '/api/audit/status/{id}'
 */
status.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AuditController::status
 * @see app/Http/Controllers/AuditController.php:70
 * @route '/api/audit/status/{id}'
 */
status.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: status.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AuditController::status
 * @see app/Http/Controllers/AuditController.php:70
 * @route '/api/audit/status/{id}'
 */
    const statusForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: status.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AuditController::status
 * @see app/Http/Controllers/AuditController.php:70
 * @route '/api/audit/status/{id}'
 */
        statusForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: status.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AuditController::status
 * @see app/Http/Controllers/AuditController.php:70
 * @route '/api/audit/status/{id}'
 */
        statusForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: status.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    status.form = statusForm
const AuditController = { scrape, seoStatus, analyzePageSpeed, status }

export default AuditController