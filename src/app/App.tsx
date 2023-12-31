import React, { Suspense, useEffect } from 'react'
import { useTheme } from 'app/provider/ThemeProvider'
import AppRouter from 'app/provider/router'
import { Navbar } from 'widgets/Navbar'
import Sidebar from 'widgets/Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div id={'app'} className={classNames('app', {}, [theme, 'main'])}>
            <Suspense fallback={''}>
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar/>
                    {inited && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    )
}

export default App
