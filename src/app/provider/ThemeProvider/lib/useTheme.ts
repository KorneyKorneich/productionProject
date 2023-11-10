import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from './themeContext'
import { useContext } from 'react'

export interface useThemeResult {
    handleTheme: () => void
    theme: Themes
}

export function useTheme (): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const handleTheme = () => {
        let newTheme: Themes;
        switch (theme) {
            case Themes.LIGHT:
                newTheme = Themes.GREEN
                break;
            case Themes.GREEN:
                newTheme = Themes.DARK
                break;
            case Themes.DARK:
                newTheme = Themes.LIGHT
                break;
            default:
                newTheme = Themes.LIGHT
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {
        theme: theme || Themes.LIGHT,
        handleTheme
    }
}
