import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/ui/mainPage';
import { AboutPage } from 'pages/ui/aboutPage';
import { NotFoundPage } from 'pages/ui/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    MOT_FOUND='not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.MOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.MOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
