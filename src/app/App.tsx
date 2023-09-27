import React, {Suspense} from 'react';
import "./style/index.scss"
import {Link, Route, Routes} from 'react-router-dom'
import {classNames} from "app/shared/lib/classNames";
import {useTheme} from "app/provider/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
const App = () => {

    const {theme, handleTheme} = useTheme();

    return (
        <div className={classNames('app', {hovered:true, red: false}, [theme, "main"])}>
            <button onClick={handleTheme}>Change</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>...Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;