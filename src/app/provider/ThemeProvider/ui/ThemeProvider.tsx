import {ReactFC} from "../../../../../config/build/types/childrenType";
import React, {useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Themes, ThemeContext} from "../lib/themeContext";

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
