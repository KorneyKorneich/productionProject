import { lazy } from 'react'

export const AboutPageLazy = lazy(async () => {
    return await new Promise(resolve => {
    // @ts-expect-error
        setTimeout(() => { resolve(import('./aboutPage')) }, 1500)
    })
})
