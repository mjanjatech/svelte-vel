import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \ProBlueprintController::blueprint
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
export const blueprint = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blueprint.url(options),
    method: 'get',
})

blueprint.definition = {
    methods: ["get","head"],
    url: '/blueprint/pro',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ProBlueprintController::blueprint
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
blueprint.url = (options?: RouteQueryOptions) => {
    return blueprint.definition.url + queryParams(options)
}

/**
* @see \ProBlueprintController::blueprint
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
blueprint.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blueprint.url(options),
    method: 'get',
})
/**
* @see \ProBlueprintController::blueprint
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
blueprint.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: blueprint.url(options),
    method: 'head',
})

    /**
* @see \ProBlueprintController::blueprint
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
    const blueprintForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: blueprint.url(options),
        method: 'get',
    })

            /**
* @see \ProBlueprintController::blueprint
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
        blueprintForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blueprint.url(options),
            method: 'get',
        })
            /**
* @see \ProBlueprintController::blueprint
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
        blueprintForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blueprint.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    blueprint.form = blueprintForm
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
* @see \ProBlueprintController::showDetails
 * @see [unknown]:0
 * @route '/blueprint/pro/{uniqueId}'
 */
export const showDetails = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showDetails.url(args, options),
    method: 'get',
})

showDetails.definition = {
    methods: ["get","head"],
    url: '/blueprint/pro/{uniqueId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ProBlueprintController::showDetails
 * @see [unknown]:0
 * @route '/blueprint/pro/{uniqueId}'
 */
showDetails.url = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showDetails.definition.url
            .replace('{uniqueId}', parsedArgs.uniqueId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \ProBlueprintController::showDetails
 * @see [unknown]:0
 * @route '/blueprint/pro/{uniqueId}'
 */
showDetails.get = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showDetails.url(args, options),
    method: 'get',
})
/**
* @see \ProBlueprintController::showDetails
 * @see [unknown]:0
 * @route '/blueprint/pro/{uniqueId}'
 */
showDetails.head = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showDetails.url(args, options),
    method: 'head',
})

    /**
* @see \ProBlueprintController::showDetails
 * @see [unknown]:0
 * @route '/blueprint/pro/{uniqueId}'
 */
    const showDetailsForm = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showDetails.url(args, options),
        method: 'get',
    })

            /**
* @see \ProBlueprintController::showDetails
 * @see [unknown]:0
 * @route '/blueprint/pro/{uniqueId}'
 */
        showDetailsForm.get = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showDetails.url(args, options),
            method: 'get',
        })
            /**
* @see \ProBlueprintController::showDetails
 * @see [unknown]:0
 * @route '/blueprint/pro/{uniqueId}'
 */
        showDetailsForm.head = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showDetails.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showDetails.form = showDetailsForm
const ProBlueprintController = { blueprint, start, showDetails }

export default ProBlueprintController