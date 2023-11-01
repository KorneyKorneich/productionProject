import type React from 'react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home-20-20.svg'
import AboutIcon from 'shared/assets/icons/aboutUs-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface SidebarItemType {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    path: string
    text: string
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePaths.main,
        Icon: MainIcon,
        text: 'Главная'
    },
    {
        path: RoutePaths.about,
        Icon: AboutIcon,
        text: 'О нас'
    },
    {
        path: RoutePaths.profile,
        Icon: ProfileIcon,
        text: 'Профиль'
    }
]
