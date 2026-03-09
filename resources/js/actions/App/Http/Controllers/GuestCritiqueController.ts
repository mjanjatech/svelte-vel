import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\GuestCritiqueController::showRoaster
 * @see app/Http/Controllers/GuestCritiqueController.php:14
 * @route '/roast/guest'
 */
export const showRoaster = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showRoaster.url(options),
    method: 'get',
})

showRoaster.definition = {
    methods: ["get","head"],
    url: '/roast/guest',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GuestCritiqueController::showRoaster
 * @see app/Http/Controllers/GuestCritiqueController.php:14
 * @route '/roast/guest'
 */
showRoaster.url = (options?: RouteQueryOptions) => {
    return showRoaster.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuestCritiqueController::showRoaster
 * @see app/Http/Controllers/GuestCritiqueController.php:14
 * @route '/roast/guest'
 */
showRoaster.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showRoaster.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GuestCritiqueController::showRoaster
 * @see app/Http/Controllers/GuestCritiqueController.php:14
 * @route '/roast/guest'
 */
showRoaster.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showRoaster.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GuestCritiqueController::showRoaster
 * @see app/Http/Controllers/GuestCritiqueController.php:14
 * @route '/roast/guest'
 */
    const showRoasterForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showRoaster.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GuestCritiqueController::showRoaster
 * @see app/Http/Controllers/GuestCritiqueController.php:14
 * @route '/roast/guest'
 */
        showRoasterForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showRoaster.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GuestCritiqueController::showRoaster
 * @see app/Http/Controllers/GuestCritiqueController.php:14
 * @route '/roast/guest'
 */
        showRoasterForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showRoaster.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showRoaster.form = showRoasterForm
/**
* @see \App\Http\Controllers\GuestCritiqueController::startRoast
 * @see app/Http/Controllers/GuestCritiqueController.php:19
 * @route '/roast/guest'
 */
export const startRoast = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: startRoast.url(options),
    method: 'post',
})

startRoast.definition = {
    methods: ["post"],
    url: '/roast/guest',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GuestCritiqueController::startRoast
 * @see app/Http/Controllers/GuestCritiqueController.php:19
 * @route '/roast/guest'
 */
startRoast.url = (options?: RouteQueryOptions) => {
    return startRoast.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuestCritiqueController::startRoast
 * @see app/Http/Controllers/GuestCritiqueController.php:19
 * @route '/roast/guest'
 */
startRoast.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: startRoast.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\GuestCritiqueController::startRoast
 * @see app/Http/Controllers/GuestCritiqueController.php:19
 * @route '/roast/guest'
 */
    const startRoastForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: startRoast.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GuestCritiqueController::startRoast
 * @see app/Http/Controllers/GuestCritiqueController.php:19
 * @route '/roast/guest'
 */
        startRoastForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: startRoast.url(options),
            method: 'post',
        })
    
    startRoast.form = startRoastForm
/**
* @see \App\Http\Controllers\GuestCritiqueController::show
 * @see app/Http/Controllers/GuestCritiqueController.php:55
 * @route '/roast/guest/{uniqueId}'
 */
export const show = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/roast/guest/{uniqueId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GuestCritiqueController::show
 * @see app/Http/Controllers/GuestCritiqueController.php:55
 * @route '/roast/guest/{uniqueId}'
 */
show.url = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { uniqueId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    uniqueId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        uniqueId: args.uniqueId,
                }

    return show.definition.url
            .replace('{uniqueId}', parsedArgs.uniqueId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuestCritiqueController::show
 * @see app/Http/Controllers/GuestCritiqueController.php:55
 * @route '/roast/guest/{uniqueId}'
 */
show.get = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GuestCritiqueController::show
 * @see app/Http/Controllers/GuestCritiqueController.php:55
 * @route '/roast/guest/{uniqueId}'
 */
show.head = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GuestCritiqueController::show
 * @see app/Http/Controllers/GuestCritiqueController.php:55
 * @route '/roast/guest/{uniqueId}'
 */
    const showForm = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GuestCritiqueController::show
 * @see app/Http/Controllers/GuestCritiqueController.php:55
 * @route '/roast/guest/{uniqueId}'
 */
        showForm.get = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GuestCritiqueController::show
 * @see app/Http/Controllers/GuestCritiqueController.php:55
 * @route '/roast/guest/{uniqueId}'
 */
        showForm.head = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const GuestCritiqueController = { showRoaster, startRoast, show }

export default GuestCritiqueController