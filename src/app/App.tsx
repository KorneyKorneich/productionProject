import React, { Suspense } from 'react'
import { classNames } from '../shared/lib/classNames/classNames'
import { useTheme } from 'app/provider/ThemeProvider'
import AppRouter from 'app/provider/router'
import { Navbar } from 'widgets/Navbar'
import Sidebar from 'widgets/Sidebar'

const App = () => {
    const { theme } = useTheme();

    return (
        <div id={'app'} className={classNames('app', {}, [theme, 'main'])}>
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
