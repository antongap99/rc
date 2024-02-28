import { RouteProps } from 'react-router-dom';
import MainPage from 'pages/ui/mainPage/MainPage';
import AboutPage from 'pages/ui/aboutPage/AboutPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
	MOT_FOUND='not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
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
};
