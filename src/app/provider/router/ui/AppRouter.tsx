import React, { memo, Suspense, useCallback } from 'react'
import { Route } from 'react-router-dom'
import { type AppRoutesProps, routesConfig } from 'shared/config/routeConfig/routeConfig'
import PageLoader from 'widgets/PageLoader/PageLoader'
import { RequiredAuth } from 'app/provider/router/ui/RequiredAuth';
import { Routes } from 'react-router';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className={'page-wrapper'}>
                    {route.element}
                </div>
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequiredAuth>{element}</RequiredAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routesConfig).map(renderWithWrapper)}
        </Routes>
    );
}

export default memo(AppRouter)
