import React, { type FC } from 'react'
import { classNames } from '../../shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Themes, useTheme } from 'app/provider/ThemeProvider'
import DarkIcon from 'shared/assets/icons/dark-theme-icon.svg'
import LightIcon from 'shared/assets/icons/light-theme-icon.svg'
import Button, { ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC = ({ className }: ThemeSwitcherProps) => {
    const { theme, handleTheme } = useTheme()

    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={handleTheme}>
            {theme === Themes.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    )
}

export default ThemeSwitcher
