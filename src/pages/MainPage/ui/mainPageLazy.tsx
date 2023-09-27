import { lazy } from 'react';

export const MainPageLazy = lazy(() => {
    return new Promise(resolve => {
        // @ts-ignore
        setTimeout(() => resolve(import('./mainPage')), 1500)
    })
});
