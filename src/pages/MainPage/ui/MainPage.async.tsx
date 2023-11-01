import { lazy } from 'react'

export const MainPageAsync = lazy(async () => {
    return await new Promise(resolve => {
        setTimeout(() => { // @ts-expect-error
            resolve(import('./MainPage'))
        }, 1500)
    })
})
