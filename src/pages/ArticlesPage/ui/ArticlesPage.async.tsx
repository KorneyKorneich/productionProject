import { lazy } from 'react'

export const ArticlesPageAsync = lazy(async () => {
    return await new Promise(resolve => {
        setTimeout(() => { // @ts-expect-error
            resolve(import('./ArticlesPage'))
        }, 1500)
    })
})
