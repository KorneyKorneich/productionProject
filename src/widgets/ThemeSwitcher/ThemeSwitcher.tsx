import React, { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Themes, useTheme } from 'app/provider/ThemeProvider'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import Button, { ButtonTheme } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, handleTheme } = useTheme()

    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={handleTheme}>
            {theme === Themes.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    )
});

export default ThemeSwitcher
