import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import guestBfef84 from './guest'
import pro00185b from './pro'
/**
* @see \App\Http\Controllers\GuestBlueprintController::guest
 * @see app/Http/Controllers/GuestBlueprintController.php:15
 * @route '/blueprint/guest'
 */
export const guest = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: guest.url(options),
    method: 'get',
})

guest.definition = {
    methods: ["get","head"],
    url: '/blueprint/guest',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GuestBlueprintController::guest
 * @see app/Http/Controllers/GuestBlueprintController.php:15
 * @route '/blueprint/guest'
 */
guest.url = (options?: RouteQueryOptions) => {
    return guest.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuestBlueprintController::guest
 * @see app/Http/Controllers/GuestBlueprintController.php:15
 * @route '/blueprint/guest'
 */
guest.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: guest.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GuestBlueprintController::guest
 * @see app/Http/Controllers/GuestBlueprintController.php:15
 * @route '/blueprint/guest'
 */
guest.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: guest.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GuestBlueprintController::guest
 * @see app/Http/Controllers/GuestBlueprintController.php:15
 * @route '/blueprint/guest'
 */
    const guestForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: guest.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GuestBlueprintController::guest
 * @see app/Http/Controllers/GuestBlueprintController.php:15
 * @route '/blueprint/guest'
 */
        guestForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: guest.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GuestBlueprintController::guest
 * @see app/Http/Controllers/GuestBlueprintController.php:15
 * @route '/blueprint/guest'
 */
        guestForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: guest.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    guest.form = guestForm
/**
* @see \ProBlueprintController::pro
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
export const pro = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pro.url(options),
    method: 'get',
})

pro.definition = {
    methods: ["get","head"],
    url: '/blueprint/pro',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \ProBlueprintController::pro
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
pro.url = (options?: RouteQueryOptions) => {
    return pro.definition.url + queryParams(options)
}

/**
* @see \ProBlueprintController::pro
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
pro.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pro.url(options),
    method: 'get',
})
/**
* @see \ProBlueprintController::pro
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
pro.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pro.url(options),
    method: 'head',
})

    /**
* @see \ProBlueprintController::pro
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
    const proForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pro.url(options),
        method: 'get',
    })

            /**
* @see \ProBlueprintController::pro
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
        proForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pro.url(options),
            method: 'get',
        })
            /**
* @see \ProBlueprintController::pro
 * @see [unknown]:0
 * @route '/blueprint/pro'
 */
        proForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pro.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pro.form = proForm
const blueprint = {
    guest: Object.assign(guest, guestBfef84),
pro: Object.assign(pro, pro00185b),
}

export default blueprint