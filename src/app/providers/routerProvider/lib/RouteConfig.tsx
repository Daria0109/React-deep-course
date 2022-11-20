import { RouteObject } from 'react-router-dom';
import { MainPage } from 'pages/mainPage';
import { AboutPage } from 'pages/aboutPage';
import { AppRoutes } from 'shared/config/appRoutes/appRoutes';

export const routeConfig: Record<AppRoutes, RouteObject> = {
	[AppRoutes.MAIN]: {
		path: AppRoutes.MAIN,
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: AppRoutes.ABOUT,
		element: <AboutPage />
	}
}