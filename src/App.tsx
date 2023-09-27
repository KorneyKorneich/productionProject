import React, {Suspense, useContext, useState} from 'react';
import './style/index.scss';
import {Link, Route, Routes} from 'react-router-dom'
import {AboutPageLazy} from "./pages/AboutPage/aboutPageLazy";
import {MainPageLazy} from "./pages/MainPage/mainPageLazy";
import {ThemeContext, Themes} from "./themes/themeContext";
import {useTheme} from "./themes/useTheme";
import {classNames} from "./helpers/classNames";
const App = () => {

    const {theme, handleTheme} = useTheme();

    return (
        <div className={classNames('app', {hovered:true, red: false}, ["main"])}>
            <button onClick={handleTheme}>Change</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>...Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;