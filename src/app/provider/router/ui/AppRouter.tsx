import React, { memo, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesConfig } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'
import PageLoader from 'widgets/PageLoader/PageLoader'
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);
    const routes = useMemo(() => {
        return Object.values(routesConfig).filter((route) => {
            if (route.authOnly && !isAuth) {
                return false
            } else return true
        })
    }, [isAuth])

    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route
                    key = {path}
                    path = {path}
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <div className={'page-wrapper'}>
                                {element}
                            </div>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    )
}

export default memo(AppRouter)
