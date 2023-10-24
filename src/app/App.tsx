import React, { Suspense, useEffect } from 'react'
import { classNames } from '../shared/lib/classNames/classNames'
import { useTheme } from 'app/provider/ThemeProvider'
import AppRouter from 'app/provider/router'
import { Navbar } from 'widgets/Navbar'
import Sidebar from 'widgets/Sidebar'
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initUsetAuth());
    }, [dispatch]);

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
