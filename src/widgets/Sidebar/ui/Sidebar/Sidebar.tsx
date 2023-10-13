import React, { type FC, useState } from 'react'
import { classNames } from '../../../../shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import ThemeSwitcher from 'widgets/ThemeSwitcher/ThemeSwitcher'
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher'

interface SidebarProps {
    className?: string
}

const Sidebar: FC = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
        console.log('switched')
    }

    return (
        <div
            data-testid={'Sidebar'}
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <button
                data-testid={'Sidebar-toggle'}
                onClick={onToggle}
            >Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
}

export default Sidebar
