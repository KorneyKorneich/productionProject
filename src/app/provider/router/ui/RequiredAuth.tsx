import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import React, { type ReactNode } from 'react';

export function RequiredAuth ({ children }: { children: ReactNode }) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePaths.main} state={{ from: location }} replace />;
    }

    return <>{children}</>;
}
