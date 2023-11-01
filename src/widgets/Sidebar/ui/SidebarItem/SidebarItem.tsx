import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next';
import { type SidebarItemType } from 'widgets/Sidebar/model/types/types';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        >
            <item.Icon className={cls.icon}/>
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});

export default SidebarItem;
