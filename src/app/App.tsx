import React, {Suspense} from 'react';
import "./style/index.scss"
import {Link, Route, Routes} from 'react-router-dom'
import {classNames} from "app/shared/lib/classNames";
import {useTheme} from "app/provider/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import AppRouter from "app/provider/router";
import {Navbar} from "widgets/Navbar";
const App = () => {

    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme, "main"])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;