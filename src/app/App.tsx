import React, { Suspense, useEffect } from 'react'
import { useTheme } from 'app/provider/ThemeProvider'
import AppRouter from 'app/provider/router'
import { Navbar } from 'widgets/Navbar'
import Sidebar from 'widgets/Sidebar'
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
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
