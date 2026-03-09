import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \ProBlueprintController::start
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
export const start = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/blueprint/pro',
} satisfies RouteDefinition<["post"]>

/**
* @see \ProBlueprintController::start
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
start.url = (options?: RouteQueryOptions) => {
    return start.definition.url + queryParams(options)
}

/**
* @see \ProBlueprintController::start
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
start.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(options),
    method: 'post',
})

    /**
* @see \ProBlueprintController::start
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
    const startForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: start.url(options),
        method: 'post',
    })

            /**
* @see \ProBlueprintController::start
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
        startForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: start.url(options),
            method: 'post',
        })
    
    start.form = startForm
/**
* @see \ProBlueprintController::show
 * @see [unknown]:0
 * @route '/blueprint/pro/{uniqueId}'
 */
export const show = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/blueprint/pro/{uniqueId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ProBlueprintController::show
 * @see [unknown]:0
 * @route '/blueprint/pro/{uniqueId}'
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
* @see \ProBlueprintController::show
 * @see [unknown]:0
 * @route '/blueprint/pro/{uniqueId}'
 */
show.get = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \ProBlueprintController::show
 * @see [unknown]:0
 * @route '/blueprint/pro/{uniqueId}'
 */
show.head = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \ProBlueprintController::show
 * @see [unknown]:0
 * @route '/blueprint/pro/{uniqueId}'
 */
    const showForm = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \ProBlueprintController::show
 * @see [unknown]:0
 * @route '/blueprint/pro/{uniqueId}'
 */
        showForm.get = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \ProBlueprintController::show
 * @see [unknown]:0
 * @route '/blueprint/pro/{uniqueId}'
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
    start: Object.assign(start, start),
show: Object.assign(show, show),
}

export default pro