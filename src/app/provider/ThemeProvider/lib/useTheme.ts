import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from './themeContext'
import { useContext } from 'react'

export interface useThemeResult {
    handleTheme: () => void
    theme: Themes
}

export function useTheme (): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const handleTheme = () => {
        const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {
        theme: theme || Themes.LIGHT,
        handleTheme
    }
}
