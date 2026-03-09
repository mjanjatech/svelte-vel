import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\GuestBlueprintController::blueprint
 * @see app/Http/Controllers/GuestBlueprintController.php:15
 * @route '/blueprint/guest'
 */
export const blueprint = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blueprint.url(options),
    method: 'get',
})

blueprint.definition = {
    methods: ["get","head"],
    url: '/blueprint/guest',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GuestBlueprintController::blueprint
 * @see app/Http/Controllers/GuestBlueprintController.php:15
 * @route '/blueprint/guest'
 */
blueprint.url = (options?: RouteQueryOptions) => {
    return blueprint.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuestBlueprintController::blueprint
 * @see app/Http/Controllers/GuestBlueprintController.php:15
 * @route '/blueprint/guest'
 */
blueprint.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blueprint.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GuestBlueprintController::blueprint
 * @see app/Http/Controllers/GuestBlueprintController.php:15
 * @route '/blueprint/guest'
 */
blueprint.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: blueprint.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GuestBlueprintController::blueprint
 * @see app/Http/Controllers/GuestBlueprintController.php:15
 * @route '/blueprint/guest'
 */
    const blueprintForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: blueprint.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GuestBlueprintController::blueprint
 * @see app/Http/Controllers/GuestBlueprintController.php:15
 * @route '/blueprint/guest'
 */
        blueprintForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blueprint.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GuestBlueprintController::blueprint
 * @see app/Http/Controllers/GuestBlueprintController.php:15
 * @route '/blueprint/guest'
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
* @see \App\Http\Controllers\GuestBlueprintController::start
 * @see app/Http/Controllers/GuestBlueprintController.php:20
 * @route '/blueprint/guest'
 */
export const start = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/blueprint/guest',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GuestBlueprintController::start
 * @see app/Http/Controllers/GuestBlueprintController.php:20
 * @route '/blueprint/guest'
 */
start.url = (options?: RouteQueryOptions) => {
    return start.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuestBlueprintController::start
 * @see app/Http/Controllers/GuestBlueprintController.php:20
 * @route '/blueprint/guest'
 */
start.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\GuestBlueprintController::start
 * @see app/Http/Controllers/GuestBlueprintController.php:20
 * @route '/blueprint/guest'
 */
    const startForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: start.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GuestBlueprintController::start
 * @see app/Http/Controllers/GuestBlueprintController.php:20
 * @route '/blueprint/guest'
 */
        startForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: start.url(options),
            method: 'post',
        })
    
    start.form = startForm
/**
* @see \App\Http\Controllers\GuestBlueprintController::showDetails
 * @see app/Http/Controllers/GuestBlueprintController.php:41
 * @route '/blueprint/guest/{uniqueId}'
 */
export const showDetails = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showDetails.url(args, options),
    method: 'get',
})

showDetails.definition = {
    methods: ["get","head"],
    url: '/blueprint/guest/{uniqueId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GuestBlueprintController::showDetails
 * @see app/Http/Controllers/GuestBlueprintController.php:41
 * @route '/blueprint/guest/{uniqueId}'
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
* @see \App\Http\Controllers\GuestBlueprintController::showDetails
 * @see app/Http/Controllers/GuestBlueprintController.php:41
 * @route '/blueprint/guest/{uniqueId}'
 */
showDetails.get = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showDetails.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GuestBlueprintController::showDetails
 * @see app/Http/Controllers/GuestBlueprintController.php:41
 * @route '/blueprint/guest/{uniqueId}'
 */
showDetails.head = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showDetails.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GuestBlueprintController::showDetails
 * @see app/Http/Controllers/GuestBlueprintController.php:41
 * @route '/blueprint/guest/{uniqueId}'
 */
    const showDetailsForm = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showDetails.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GuestBlueprintController::showDetails
 * @see app/Http/Controllers/GuestBlueprintController.php:41
 * @route '/blueprint/guest/{uniqueId}'
 */
        showDetailsForm.get = (args: { uniqueId: string | number } | [uniqueId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showDetails.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GuestBlueprintController::showDetails
 * @see app/Http/Controllers/GuestBlueprintController.php:41
 * @route '/blueprint/guest/{uniqueId}'
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
const GuestBlueprintController = { blueprint, start, showDetails }

export default GuestBlueprintController