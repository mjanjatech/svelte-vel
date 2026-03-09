import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CritiqueController::dashboard
 * @see app/Http/Controllers/CritiqueController.php:28
 * @route '/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CritiqueController::dashboard
 * @see app/Http/Controllers/CritiqueController.php:28
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::dashboard
 * @see app/Http/Controllers/CritiqueController.php:28
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CritiqueController::dashboard
 * @see app/Http/Controllers/CritiqueController.php:28
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CritiqueController::dashboard
 * @see app/Http/Controllers/CritiqueController.php:28
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::dashboard
 * @see app/Http/Controllers/CritiqueController.php:28
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CritiqueController::dashboard
 * @see app/Http/Controllers/CritiqueController.php:28
 * @route '/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\CritiqueController::storeDiscovery
 * @see app/Http/Controllers/CritiqueController.php:66
 * @route '/critiques/discovery/store'
 */
export const storeDiscovery = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeDiscovery.url(options),
    method: 'post',
})

storeDiscovery.definition = {
    methods: ["post"],
    url: '/critiques/discovery/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CritiqueController::storeDiscovery
 * @see app/Http/Controllers/CritiqueController.php:66
 * @route '/critiques/discovery/store'
 */
storeDiscovery.url = (options?: RouteQueryOptions) => {
    return storeDiscovery.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::storeDiscovery
 * @see app/Http/Controllers/CritiqueController.php:66
 * @route '/critiques/discovery/store'
 */
storeDiscovery.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeDiscovery.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CritiqueController::storeDiscovery
 * @see app/Http/Controllers/CritiqueController.php:66
 * @route '/critiques/discovery/store'
 */
    const storeDiscoveryForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storeDiscovery.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::storeDiscovery
 * @see app/Http/Controllers/CritiqueController.php:66
 * @route '/critiques/discovery/store'
 */
        storeDiscoveryForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storeDiscovery.url(options),
            method: 'post',
        })
    
    storeDiscovery.form = storeDiscoveryForm
/**
* @see \App\Http\Controllers\CritiqueController::index
 * @see app/Http/Controllers/CritiqueController.php:17
 * @route '/critiques'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/critiques',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CritiqueController::index
 * @see app/Http/Controllers/CritiqueController.php:17
 * @route '/critiques'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::index
 * @see app/Http/Controllers/CritiqueController.php:17
 * @route '/critiques'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CritiqueController::index
 * @see app/Http/Controllers/CritiqueController.php:17
 * @route '/critiques'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CritiqueController::index
 * @see app/Http/Controllers/CritiqueController.php:17
 * @route '/critiques'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::index
 * @see app/Http/Controllers/CritiqueController.php:17
 * @route '/critiques'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CritiqueController::index
 * @see app/Http/Controllers/CritiqueController.php:17
 * @route '/critiques'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\CritiqueController::create
 * @see app/Http/Controllers/CritiqueController.php:61
 * @route '/critiques/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/critiques/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CritiqueController::create
 * @see app/Http/Controllers/CritiqueController.php:61
 * @route '/critiques/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::create
 * @see app/Http/Controllers/CritiqueController.php:61
 * @route '/critiques/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CritiqueController::create
 * @see app/Http/Controllers/CritiqueController.php:61
 * @route '/critiques/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CritiqueController::create
 * @see app/Http/Controllers/CritiqueController.php:61
 * @route '/critiques/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::create
 * @see app/Http/Controllers/CritiqueController.php:61
 * @route '/critiques/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CritiqueController::create
 * @see app/Http/Controllers/CritiqueController.php:61
 * @route '/critiques/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\CritiqueController::store
 * @see app/Http/Controllers/CritiqueController.php:89
 * @route '/critiques'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/critiques',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CritiqueController::store
 * @see app/Http/Controllers/CritiqueController.php:89
 * @route '/critiques'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::store
 * @see app/Http/Controllers/CritiqueController.php:89
 * @route '/critiques'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CritiqueController::store
 * @see app/Http/Controllers/CritiqueController.php:89
 * @route '/critiques'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::store
 * @see app/Http/Controllers/CritiqueController.php:89
 * @route '/critiques'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{critique}'
 */
const show9e5e628ba7fc92da0901284829889453 = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show9e5e628ba7fc92da0901284829889453.url(args, options),
    method: 'get',
})

show9e5e628ba7fc92da0901284829889453.definition = {
    methods: ["get","head"],
    url: '/critiques/{critique}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{critique}'
 */
show9e5e628ba7fc92da0901284829889453.url = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show9e5e628ba7fc92da0901284829889453.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{critique}'
 */
show9e5e628ba7fc92da0901284829889453.get = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show9e5e628ba7fc92da0901284829889453.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{critique}'
 */
show9e5e628ba7fc92da0901284829889453.head = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show9e5e628ba7fc92da0901284829889453.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{critique}'
 */
    const show9e5e628ba7fc92da0901284829889453Form = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show9e5e628ba7fc92da0901284829889453.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{critique}'
 */
        show9e5e628ba7fc92da0901284829889453Form.get = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show9e5e628ba7fc92da0901284829889453.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{critique}'
 */
        show9e5e628ba7fc92da0901284829889453Form.head = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show9e5e628ba7fc92da0901284829889453.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show9e5e628ba7fc92da0901284829889453.form = show9e5e628ba7fc92da0901284829889453Form
    /**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{id}/view'
 */
const showa695002b354251cdbd4ee55d71270bf8 = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showa695002b354251cdbd4ee55d71270bf8.url(args, options),
    method: 'get',
})

showa695002b354251cdbd4ee55d71270bf8.definition = {
    methods: ["get","head"],
    url: '/critiques/{id}/view',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{id}/view'
 */
showa695002b354251cdbd4ee55d71270bf8.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showa695002b354251cdbd4ee55d71270bf8.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{id}/view'
 */
showa695002b354251cdbd4ee55d71270bf8.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showa695002b354251cdbd4ee55d71270bf8.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{id}/view'
 */
showa695002b354251cdbd4ee55d71270bf8.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showa695002b354251cdbd4ee55d71270bf8.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{id}/view'
 */
    const showa695002b354251cdbd4ee55d71270bf8Form = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showa695002b354251cdbd4ee55d71270bf8.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{id}/view'
 */
        showa695002b354251cdbd4ee55d71270bf8Form.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showa695002b354251cdbd4ee55d71270bf8.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{id}/view'
 */
        showa695002b354251cdbd4ee55d71270bf8Form.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showa695002b354251cdbd4ee55d71270bf8.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showa695002b354251cdbd4ee55d71270bf8.form = showa695002b354251cdbd4ee55d71270bf8Form

export const show = {
    '/critiques/{critique}': show9e5e628ba7fc92da0901284829889453,
    '/critiques/{id}/view': showa695002b354251cdbd4ee55d71270bf8,
}

/**
* @see \App\Http\Controllers\CritiqueController::edit
 * @see app/Http/Controllers/CritiqueController.php:167
 * @route '/critiques/{critique}/edit'
 */
export const edit = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/critiques/{critique}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CritiqueController::edit
 * @see app/Http/Controllers/CritiqueController.php:167
 * @route '/critiques/{critique}/edit'
 */
edit.url = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::edit
 * @see app/Http/Controllers/CritiqueController.php:167
 * @route '/critiques/{critique}/edit'
 */
edit.get = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CritiqueController::edit
 * @see app/Http/Controllers/CritiqueController.php:167
 * @route '/critiques/{critique}/edit'
 */
edit.head = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CritiqueController::edit
 * @see app/Http/Controllers/CritiqueController.php:167
 * @route '/critiques/{critique}/edit'
 */
    const editForm = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::edit
 * @see app/Http/Controllers/CritiqueController.php:167
 * @route '/critiques/{critique}/edit'
 */
        editForm.get = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CritiqueController::edit
 * @see app/Http/Controllers/CritiqueController.php:167
 * @route '/critiques/{critique}/edit'
 */
        editForm.head = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\CritiqueController::update
 * @see app/Http/Controllers/CritiqueController.php:177
 * @route '/critiques/{critique}'
 */
export const update = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/critiques/{critique}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\CritiqueController::update
 * @see app/Http/Controllers/CritiqueController.php:177
 * @route '/critiques/{critique}'
 */
update.url = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::update
 * @see app/Http/Controllers/CritiqueController.php:177
 * @route '/critiques/{critique}'
 */
update.put = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\CritiqueController::update
 * @see app/Http/Controllers/CritiqueController.php:177
 * @route '/critiques/{critique}'
 */
update.patch = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\CritiqueController::update
 * @see app/Http/Controllers/CritiqueController.php:177
 * @route '/critiques/{critique}'
 */
    const updateForm = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/CritiqueController.php:177
 * @route '/critiques/{critique}'
 */
        updateForm.put = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/CritiqueController.php:177
 * @route '/critiques/{critique}'
 */
        updateForm.patch = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\CritiqueController::destroy
 * @see app/Http/Controllers/CritiqueController.php:196
 * @route '/critiques/{critique}'
 */
export const destroy = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/critiques/{critique}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CritiqueController::destroy
 * @see app/Http/Controllers/CritiqueController.php:196
 * @route '/critiques/{critique}'
 */
destroy.url = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::destroy
 * @see app/Http/Controllers/CritiqueController.php:196
 * @route '/critiques/{critique}'
 */
destroy.delete = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CritiqueController::destroy
 * @see app/Http/Controllers/CritiqueController.php:196
 * @route '/critiques/{critique}'
 */
    const destroyForm = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/CritiqueController.php:196
 * @route '/critiques/{critique}'
 */
        destroyForm.delete = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\CritiqueController::claim
 * @see app/Http/Controllers/CritiqueController.php:205
 * @route '/critiques/{critique}/claim'
 */
export const claim = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: claim.url(args, options),
    method: 'post',
})

claim.definition = {
    methods: ["post"],
    url: '/critiques/{critique}/claim',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CritiqueController::claim
 * @see app/Http/Controllers/CritiqueController.php:205
 * @route '/critiques/{critique}/claim'
 */
claim.url = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return claim.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::claim
 * @see app/Http/Controllers/CritiqueController.php:205
 * @route '/critiques/{critique}/claim'
 */
claim.post = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: claim.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CritiqueController::claim
 * @see app/Http/Controllers/CritiqueController.php:205
 * @route '/critiques/{critique}/claim'
 */
    const claimForm = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: claim.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::claim
 * @see app/Http/Controllers/CritiqueController.php:205
 * @route '/critiques/{critique}/claim'
 */
        claimForm.post = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: claim.url(args, options),
            method: 'post',
        })
    
    claim.form = claimForm
/**
* @see \App\Http\Controllers\CritiqueController::addItem
 * @see app/Http/Controllers/CritiqueController.php:214
 * @route '/critiques/{critique}/items'
 */
export const addItem = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addItem.url(args, options),
    method: 'post',
})

addItem.definition = {
    methods: ["post"],
    url: '/critiques/{critique}/items',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CritiqueController::addItem
 * @see app/Http/Controllers/CritiqueController.php:214
 * @route '/critiques/{critique}/items'
 */
addItem.url = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return addItem.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::addItem
 * @see app/Http/Controllers/CritiqueController.php:214
 * @route '/critiques/{critique}/items'
 */
addItem.post = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addItem.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CritiqueController::addItem
 * @see app/Http/Controllers/CritiqueController.php:214
 * @route '/critiques/{critique}/items'
 */
    const addItemForm = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: addItem.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::addItem
 * @see app/Http/Controllers/CritiqueController.php:214
 * @route '/critiques/{critique}/items'
 */
        addItemForm.post = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: addItem.url(args, options),
            method: 'post',
        })
    
    addItem.form = addItemForm
/**
* @see \App\Http\Controllers\CritiqueController::updateItem
 * @see app/Http/Controllers/CritiqueController.php:230
 * @route '/critiques/{critique}/items/{item}'
 */
export const updateItem = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateItem.url(args, options),
    method: 'put',
})

updateItem.definition = {
    methods: ["put"],
    url: '/critiques/{critique}/items/{item}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\CritiqueController::updateItem
 * @see app/Http/Controllers/CritiqueController.php:230
 * @route '/critiques/{critique}/items/{item}'
 */
updateItem.url = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return updateItem.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::updateItem
 * @see app/Http/Controllers/CritiqueController.php:230
 * @route '/critiques/{critique}/items/{item}'
 */
updateItem.put = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateItem.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\CritiqueController::updateItem
 * @see app/Http/Controllers/CritiqueController.php:230
 * @route '/critiques/{critique}/items/{item}'
 */
    const updateItemForm = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateItem.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::updateItem
 * @see app/Http/Controllers/CritiqueController.php:230
 * @route '/critiques/{critique}/items/{item}'
 */
        updateItemForm.put = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateItem.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    updateItem.form = updateItemForm
/**
* @see \App\Http\Controllers\CritiqueController::deleteItem
 * @see app/Http/Controllers/CritiqueController.php:246
 * @route '/critiques/{critique}/items/{item}'
 */
export const deleteItem = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteItem.url(args, options),
    method: 'delete',
})

deleteItem.definition = {
    methods: ["delete"],
    url: '/critiques/{critique}/items/{item}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CritiqueController::deleteItem
 * @see app/Http/Controllers/CritiqueController.php:246
 * @route '/critiques/{critique}/items/{item}'
 */
deleteItem.url = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions) => {
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

    return deleteItem.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace('{item}', parsedArgs.item.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::deleteItem
 * @see app/Http/Controllers/CritiqueController.php:246
 * @route '/critiques/{critique}/items/{item}'
 */
deleteItem.delete = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteItem.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\CritiqueController::deleteItem
 * @see app/Http/Controllers/CritiqueController.php:246
 * @route '/critiques/{critique}/items/{item}'
 */
    const deleteItemForm = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deleteItem.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::deleteItem
 * @see app/Http/Controllers/CritiqueController.php:246
 * @route '/critiques/{critique}/items/{item}'
 */
        deleteItemForm.delete = (args: { critique: number | { id: number }, item: number | { id: number } } | [critique: number | { id: number }, item: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deleteItem.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    deleteItem.form = deleteItemForm
/**
* @see \App\Http\Controllers\CritiqueController::uploadProposedUI
 * @see app/Http/Controllers/CritiqueController.php:147
 * @route '/critiques/{critique}/upload-proposed-ui'
 */
export const uploadProposedUI = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadProposedUI.url(args, options),
    method: 'post',
})

uploadProposedUI.definition = {
    methods: ["post"],
    url: '/critiques/{critique}/upload-proposed-ui',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CritiqueController::uploadProposedUI
 * @see app/Http/Controllers/CritiqueController.php:147
 * @route '/critiques/{critique}/upload-proposed-ui'
 */
uploadProposedUI.url = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return uploadProposedUI.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::uploadProposedUI
 * @see app/Http/Controllers/CritiqueController.php:147
 * @route '/critiques/{critique}/upload-proposed-ui'
 */
uploadProposedUI.post = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadProposedUI.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CritiqueController::uploadProposedUI
 * @see app/Http/Controllers/CritiqueController.php:147
 * @route '/critiques/{critique}/upload-proposed-ui'
 */
    const uploadProposedUIForm = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: uploadProposedUI.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::uploadProposedUI
 * @see app/Http/Controllers/CritiqueController.php:147
 * @route '/critiques/{critique}/upload-proposed-ui'
 */
        uploadProposedUIForm.post = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadProposedUI.url(args, options),
            method: 'post',
        })
    
    uploadProposedUI.form = uploadProposedUIForm
/**
* @see \App\Http\Controllers\CritiqueController::unlock
 * @see app/Http/Controllers/CritiqueController.php:159
 * @route '/critiques/{critique}/unlock'
 */
export const unlock = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unlock.url(args, options),
    method: 'post',
})

unlock.definition = {
    methods: ["post"],
    url: '/critiques/{critique}/unlock',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CritiqueController::unlock
 * @see app/Http/Controllers/CritiqueController.php:159
 * @route '/critiques/{critique}/unlock'
 */
unlock.url = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return unlock.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::unlock
 * @see app/Http/Controllers/CritiqueController.php:159
 * @route '/critiques/{critique}/unlock'
 */
unlock.post = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unlock.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CritiqueController::unlock
 * @see app/Http/Controllers/CritiqueController.php:159
 * @route '/critiques/{critique}/unlock'
 */
    const unlockForm = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: unlock.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::unlock
 * @see app/Http/Controllers/CritiqueController.php:159
 * @route '/critiques/{critique}/unlock'
 */
        unlockForm.post = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: unlock.url(args, options),
            method: 'post',
        })
    
    unlock.form = unlockForm
/**
* @see \App\Http\Controllers\CritiqueController::generateExecutiveSummary
 * @see app/Http/Controllers/CritiqueController.php:255
 * @route '/critiques/{critique}/summary'
 */
export const generateExecutiveSummary = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generateExecutiveSummary.url(args, options),
    method: 'get',
})

generateExecutiveSummary.definition = {
    methods: ["get","head"],
    url: '/critiques/{critique}/summary',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CritiqueController::generateExecutiveSummary
 * @see app/Http/Controllers/CritiqueController.php:255
 * @route '/critiques/{critique}/summary'
 */
generateExecutiveSummary.url = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return generateExecutiveSummary.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::generateExecutiveSummary
 * @see app/Http/Controllers/CritiqueController.php:255
 * @route '/critiques/{critique}/summary'
 */
generateExecutiveSummary.get = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generateExecutiveSummary.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CritiqueController::generateExecutiveSummary
 * @see app/Http/Controllers/CritiqueController.php:255
 * @route '/critiques/{critique}/summary'
 */
generateExecutiveSummary.head = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generateExecutiveSummary.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CritiqueController::generateExecutiveSummary
 * @see app/Http/Controllers/CritiqueController.php:255
 * @route '/critiques/{critique}/summary'
 */
    const generateExecutiveSummaryForm = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: generateExecutiveSummary.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::generateExecutiveSummary
 * @see app/Http/Controllers/CritiqueController.php:255
 * @route '/critiques/{critique}/summary'
 */
        generateExecutiveSummaryForm.get = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generateExecutiveSummary.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CritiqueController::generateExecutiveSummary
 * @see app/Http/Controllers/CritiqueController.php:255
 * @route '/critiques/{critique}/summary'
 */
        generateExecutiveSummaryForm.head = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generateExecutiveSummary.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    generateExecutiveSummary.form = generateExecutiveSummaryForm
/**
* @see \App\Http\Controllers\CritiqueController::chat
 * @see app/Http/Controllers/CritiqueController.php:274
 * @route '/critiques/{critique}/chat'
 */
export const chat = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: chat.url(args, options),
    method: 'post',
})

chat.definition = {
    methods: ["post"],
    url: '/critiques/{critique}/chat',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CritiqueController::chat
 * @see app/Http/Controllers/CritiqueController.php:274
 * @route '/critiques/{critique}/chat'
 */
chat.url = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return chat.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::chat
 * @see app/Http/Controllers/CritiqueController.php:274
 * @route '/critiques/{critique}/chat'
 */
chat.post = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: chat.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CritiqueController::chat
 * @see app/Http/Controllers/CritiqueController.php:274
 * @route '/critiques/{critique}/chat'
 */
    const chatForm = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: chat.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::chat
 * @see app/Http/Controllers/CritiqueController.php:274
 * @route '/critiques/{critique}/chat'
 */
        chatForm.post = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: chat.url(args, options),
            method: 'post',
        })
    
    chat.form = chatForm
const CritiqueController = { dashboard, storeDiscovery, index, create, store, show, edit, update, destroy, claim, addItem, updateItem, deleteItem, uploadProposedUI, unlock, generateExecutiveSummary, chat }

export default CritiqueController