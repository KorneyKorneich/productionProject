import { lazy } from 'react'

export const ArticleDetailsAsync = lazy(async () => {
    return await new Promise(resolve => {
        setTimeout(() => { // @ts-expect-error
            resolve(import('./ArticleDetails'))
        }, 1500)
    })
})
