import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \ProCritiqueController::showRoaster
 * @see [unknown]:0
 * @route '/roast/pro'
 */
export const showRoaster = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showRoaster.url(options),
    method: 'get',
})

showRoaster.definition = {
    methods: ["get","head"],
    url: '/roast/pro',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ProCritiqueController::showRoaster
 * @see [unknown]:0
 * @route '/roast/pro'
 */
showRoaster.url = (options?: RouteQueryOptions) => {
    return showRoaster.definition.url + queryParams(options)
}

/**
* @see \ProCritiqueController::showRoaster
 * @see [unknown]:0
 * @route '/roast/pro'
 */
showRoaster.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showRoaster.url(options),
    method: 'get',
})
/**
* @see \ProCritiqueController::showRoaster
 * @see [unknown]:0
 * @route '/roast/pro'
 */
showRoaster.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showRoaster.url(options),
    method: 'head',
})

    /**
* @see \ProCritiqueController::showRoaster
 * @see [unknown]:0
 * @route '/roast/pro'
 */
    const showRoasterForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showRoaster.url(options),
        method: 'get',
    })

            /**
* @see \ProCritiqueController::showRoaster
 * @see [unknown]:0
 * @route '/roast/pro'
 */
        showRoasterForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showRoaster.url(options),
            method: 'get',
        })
            /**
* @see \ProCritiqueController::showRoaster
 * @see [unknown]:0
 * @route '/roast/pro'
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
* @see \ProCritiqueController::startRoast
 * @see [unknown]:0
 * @route '/roast/pro'
 */
export const startRoast = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: startRoast.url(options),
    method: 'post',
})

startRoast.definition = {
    methods: ["post"],
    url: '/roast/pro',
} satisfies RouteDefinition<["post"]>

/**
* @see \ProCritiqueController::startRoast
 * @see [unknown]:0
 * @route '/roast/pro'
 */
startRoast.url = (options?: RouteQueryOptions) => {
    return startRoast.definition.url + queryParams(options)
}

/**
* @see \ProCritiqueController::startRoast
 * @see [unknown]:0
 * @route '/roast/pro'
 */
startRoast.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: startRoast.url(options),
    method: 'post',
})

    /**
* @see \ProCritiqueController::startRoast
 * @see [unknown]:0
 * @route '/roast/pro'
 */
    const startRoastForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: startRoast.url(options),
        method: 'post',
    })

            /**
* @see \ProCritiqueController::startRoast
 * @see [unknown]:0
 * @route '/roast/pro'
 */
        startRoastForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: startRoast.url(options),
            method: 'post',
        })
    
    startRoast.form = startRoastForm
/**
* @see \ProCritiqueController::show
 * @see [unknown]:0
 * @route '/roast/pro/{uniqueId}'
 */
export const show = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/roast/pro/{uniqueId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ProCritiqueController::show
 * @see [unknown]:0
 * @route '/roast/pro/{uniqueId}'
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
* @see \ProCritiqueController::show
 * @see [unknown]:0
 * @route '/roast/pro/{uniqueId}'
 */
show.get = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \ProCritiqueController::show
 * @see [unknown]:0
 * @route '/roast/pro/{uniqueId}'
 */
show.head = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \ProCritiqueController::show
 * @see [unknown]:0
 * @route '/roast/pro/{uniqueId}'
 */
    const showForm = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \ProCritiqueController::show
 * @see [unknown]:0
 * @route '/roast/pro/{uniqueId}'
 */
        showForm.get = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \ProCritiqueController::show
 * @see [unknown]:0
 * @route '/roast/pro/{uniqueId}'
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
const ProCritiqueController = { showRoaster, startRoast, show }

export default ProCritiqueController