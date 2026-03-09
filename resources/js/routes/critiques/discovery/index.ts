import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\CritiqueController::store
 * @see app/Http/Controllers/CritiqueController.php:66
 * @route '/critiques/discovery/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/critiques/discovery/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CritiqueController::store
 * @see app/Http/Controllers/CritiqueController.php:66
 * @route '/critiques/discovery/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::store
 * @see app/Http/Controllers/CritiqueController.php:66
 * @route '/critiques/discovery/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CritiqueController::store
 * @see app/Http/Controllers/CritiqueController.php:66
 * @route '/critiques/discovery/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::store
 * @see app/Http/Controllers/CritiqueController.php:66
 * @route '/critiques/discovery/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const discovery = {
    store: Object.assign(store, store),
}

export default discovery