import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import discovery53c2b0 from './discovery'
import items from './items'
import publicMethod from './public'
/**
 * @see routes/web.php:44
 * @route '/critiques/discovery'
 */
export const discovery = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: discovery.url(options),
    method: 'get',
})

discovery.definition = {
    methods: ["get","head"],
    url: '/critiques/discovery',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:44
 * @route '/critiques/discovery'
 */
discovery.url = (options?: RouteQueryOptions) => {
    return discovery.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:44
 * @route '/critiques/discovery'
 */
discovery.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: discovery.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:44
 * @route '/critiques/discovery'
 */
discovery.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: discovery.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:44
 * @route '/critiques/discovery'
 */
    const discoveryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: discovery.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:44
 * @route '/critiques/discovery'
 */
        discoveryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: discovery.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:44
 * @route '/critiques/discovery'
 */
        discoveryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: discovery.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    discovery.form = discoveryForm
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
export const show = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/critiques/{critique}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{critique}'
 */
show.url = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{critique}'
 */
show.get = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{critique}'
 */
show.head = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{critique}'
 */
    const showForm = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{critique}'
 */
        showForm.get = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CritiqueController::show
 * @see app/Http/Controllers/CritiqueController.php:115
 * @route '/critiques/{critique}'
 */
        showForm.head = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
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
* @see \App\Http\Controllers\CritiqueController::uploadProposedUi
 * @see app/Http/Controllers/CritiqueController.php:147
 * @route '/critiques/{critique}/upload-proposed-ui'
 */
export const uploadProposedUi = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadProposedUi.url(args, options),
    method: 'post',
})

uploadProposedUi.definition = {
    methods: ["post"],
    url: '/critiques/{critique}/upload-proposed-ui',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CritiqueController::uploadProposedUi
 * @see app/Http/Controllers/CritiqueController.php:147
 * @route '/critiques/{critique}/upload-proposed-ui'
 */
uploadProposedUi.url = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return uploadProposedUi.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::uploadProposedUi
 * @see app/Http/Controllers/CritiqueController.php:147
 * @route '/critiques/{critique}/upload-proposed-ui'
 */
uploadProposedUi.post = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadProposedUi.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\CritiqueController::uploadProposedUi
 * @see app/Http/Controllers/CritiqueController.php:147
 * @route '/critiques/{critique}/upload-proposed-ui'
 */
    const uploadProposedUiForm = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: uploadProposedUi.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::uploadProposedUi
 * @see app/Http/Controllers/CritiqueController.php:147
 * @route '/critiques/{critique}/upload-proposed-ui'
 */
        uploadProposedUiForm.post = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadProposedUi.url(args, options),
            method: 'post',
        })
    
    uploadProposedUi.form = uploadProposedUiForm
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
* @see \App\Http\Controllers\CritiqueController::summary
 * @see app/Http/Controllers/CritiqueController.php:255
 * @route '/critiques/{critique}/summary'
 */
export const summary = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: summary.url(args, options),
    method: 'get',
})

summary.definition = {
    methods: ["get","head"],
    url: '/critiques/{critique}/summary',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CritiqueController::summary
 * @see app/Http/Controllers/CritiqueController.php:255
 * @route '/critiques/{critique}/summary'
 */
summary.url = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return summary.definition.url
            .replace('{critique}', parsedArgs.critique.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CritiqueController::summary
 * @see app/Http/Controllers/CritiqueController.php:255
 * @route '/critiques/{critique}/summary'
 */
summary.get = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: summary.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CritiqueController::summary
 * @see app/Http/Controllers/CritiqueController.php:255
 * @route '/critiques/{critique}/summary'
 */
summary.head = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: summary.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CritiqueController::summary
 * @see app/Http/Controllers/CritiqueController.php:255
 * @route '/critiques/{critique}/summary'
 */
    const summaryForm = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: summary.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CritiqueController::summary
 * @see app/Http/Controllers/CritiqueController.php:255
 * @route '/critiques/{critique}/summary'
 */
        summaryForm.get = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: summary.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CritiqueController::summary
 * @see app/Http/Controllers/CritiqueController.php:255
 * @route '/critiques/{critique}/summary'
 */
        summaryForm.head = (args: { critique: number | { id: number } } | [critique: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: summary.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    summary.form = summaryForm
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
const critiques = {
    discovery: Object.assign(discovery, discovery53c2b0),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
claim: Object.assign(claim, claim),
items: Object.assign(items, items),
uploadProposedUi: Object.assign(uploadProposedUi, uploadProposedUi),
unlock: Object.assign(unlock, unlock),
summary: Object.assign(summary, summary),
chat: Object.assign(chat, chat),
public: Object.assign(publicMethod, publicMethod),
}

export default critiques