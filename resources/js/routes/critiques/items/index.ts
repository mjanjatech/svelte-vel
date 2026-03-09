import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\CritiqueController::store
 * @see app/Http/Controllers/CritiqueController.php:214
 * @route '/critiques/{critique}/items'
 */
export const store = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/critiques/{critique}/items',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CritiqueController::store
 * @see app/Http/Controllers/CritiqueController.php:214
 * @route '/critiques/{critique}/items'
 */
store.url = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { critique: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { critique: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    critique: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        critique: typeof args.critique === 'object'
                ? args.critique.id
                : args.critique,
                }

    return store.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::store
 * @see app/Http/Controllers/CritiqueController.php:214
 * @route '/critiques/{critique}/items'
 */
store.post = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CritiqueController::store
 * @see app/Http/Controllers/CritiqueController.php:214
 * @route '/critiques/{critique}/items'
 */
    const storeForm = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::store
 * @see app/Http/Controllers/CritiqueController.php:214
 * @route '/critiques/{critique}/items'
 */
        storeForm.post = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CritiqueController::update
 * @see app/Http/Controllers/CritiqueController.php:230
 * @route '/critiques/{critique}/items/{item}'
 */
export const update = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/critiques/{critique}/items/{item}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\CritiqueController::update
 * @see app/Http/Controllers/CritiqueController.php:230
 * @route '/critiques/{critique}/items/{item}'
 */
update.url = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    critique: args[0],
                    item: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        critique: typeof args.critique === 'object'
                ? args.critique.id
                : args.critique,
                                item: typeof args.item === 'object'
                ? args.item.id
                : args.item,
                }

    return update.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::update
 * @see app/Http/Controllers/CritiqueController.php:230
 * @route '/critiques/{critique}/items/{item}'
 */
update.put = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\CritiqueController::update
 * @see app/Http/Controllers/CritiqueController.php:230
 * @route '/critiques/{critique}/items/{item}'
 */
    const updateForm = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::update
 * @see app/Http/Controllers/CritiqueController.php:230
 * @route '/critiques/{critique}/items/{item}'
 */
        updateForm.put = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\CritiqueController::destroy
 * @see app/Http/Controllers/CritiqueController.php:246
 * @route '/critiques/{critique}/items/{item}'
 */
export const destroy = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/critiques/{critique}/items/{item}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CritiqueController::destroy
 * @see app/Http/Controllers/CritiqueController.php:246
 * @route '/critiques/{critique}/items/{item}'
 */
destroy.url = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    critique: args[0],
                    item: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        critique: typeof args.critique === 'object'
                ? args.critique.id
                : args.critique,
                                item: typeof args.item === 'object'
                ? args.item.id
                : args.item,
                }

    return destroy.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::destroy
 * @see app/Http/Controllers/CritiqueController.php:246
 * @route '/critiques/{critique}/items/{item}'
 */
destroy.delete = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CritiqueController::destroy
 * @see app/Http/Controllers/CritiqueController.php:246
 * @route '/critiques/{critique}/items/{item}'
 */
    const destroyForm = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::destroy
 * @see app/Http/Controllers/CritiqueController.php:246
 * @route '/critiques/{critique}/items/{item}'
 */
        destroyForm.delete = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const items = {
    store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default items