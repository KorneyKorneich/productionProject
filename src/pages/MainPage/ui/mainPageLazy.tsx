import { lazy } from 'react'

export const MainPageLazy = lazy(async () => {
    return await new Promise(resolve => {
        setTimeout(() => { // @ts-expect-error
            resolve(import('./mainPage'))
        }, 1500)
    })
})
