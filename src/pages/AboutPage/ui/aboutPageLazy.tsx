import { lazy } from 'react';

export const AboutPageLazy = lazy(() => {
    return new Promise(resolve => {
        // @ts-ignore
        setTimeout(() => resolve(import('./aboutPage')), 1500)
    })
});
