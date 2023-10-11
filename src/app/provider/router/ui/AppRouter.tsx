import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesConfig } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'

const AppRouter = () => {
    const { t } = useTranslation()
    return (
        <Suspense fallback={<div>...{t('Загрузка')}...</div>}>
            <Routes>
                {Object.values(routesConfig).map(({ path, element }) => (
                    <Route
                        key = {path}
                        path = {path}
                        element={
                            <Suspense fallback={<div>...Loading...</div>}>
                                <div className={'page-wrapper'}>
                                    {element}
                                </div>
                            </Suspense>
                        }
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter
