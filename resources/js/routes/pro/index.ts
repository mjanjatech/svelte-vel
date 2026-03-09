import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \ProCritiqueController::roast
 * @see [unknown]:0
 * @route '/roast/pro'
 */
export const roast = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: roast.url(options),
    method: 'get',
})

roast.definition = {
    methods: ["get","head"],
    url: '/roast/pro',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ProCritiqueController::roast
 * @see [unknown]:0
 * @route '/roast/pro'
 */
roast.url = (options?: RouteQueryOptions) => {
    return roast.definition.url + queryParams(options)
}

/**
* @see \ProCritiqueController::roast
 * @see [unknown]:0
 * @route '/roast/pro'
 */
roast.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: roast.url(options),
    method: 'get',
})
/**
* @see \ProCritiqueController::roast
 * @see [unknown]:0
 * @route '/roast/pro'
 */
roast.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: roast.url(options),
    method: 'head',
})

    /**
* @see \ProCritiqueController::roast
 * @see [unknown]:0
 * @route '/roast/pro'
 */
    const roastForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: roast.url(options),
        method: 'get',
    })

            /**
* @see \ProCritiqueController::roast
 * @see [unknown]:0
 * @route '/roast/pro'
 */
        roastForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: roast.url(options),
            method: 'get',
        })
            /**
* @see \ProCritiqueController::roast
 * @see [unknown]:0
 * @route '/roast/pro'
 */
        roastForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: roast.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    roast.form = roastForm
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
const pro = {
    roast: Object.assign(roast, roast),
startRoast: Object.assign(startRoast, startRoast),
show: Object.assign(show, show),
}

export default pro