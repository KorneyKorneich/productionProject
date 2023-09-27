import {LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes} from "./themeContext";
import {ReactFC} from "../../config/build/types/childrenType";
import React, {FC, useMemo, useState} from 'react';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT;

const ThemeProvider:ReactFC = ({children}) => {
    const [theme, setTheme] =
        useState<Themes>(defaultTheme);


    const defaultProps =
        useMemo(()=> ({
        theme: theme,
        setTheme: setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
