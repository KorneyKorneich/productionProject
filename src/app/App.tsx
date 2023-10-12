import React, { Suspense, useEffect } from 'react'
import './style/index.scss'
import { classNames } from 'app/shared/lib/classNames'
import { useTheme } from 'app/provider/ThemeProvider'
import AppRouter from 'app/provider/router'
import { Navbar } from 'widgets/Navbar'
import Sidebar from 'widgets/Sidebar'

const App = () => {
    const { theme } = useTheme()

    useEffect(() => {
        throw new Error()
    }, [])

    return (
        <div className={classNames('app', {}, [theme, 'main'])}>
            <Suspense fallback={''}>
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
