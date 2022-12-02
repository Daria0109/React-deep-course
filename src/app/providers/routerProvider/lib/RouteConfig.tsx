import { RouteObject } from 'react-router-dom';
import { AboutPage } from 'pages/aboutPage';
import { AppRoutes } from 'shared/config/appRoutes/appRoutes';
import { HomePage } from 'pages/homePage';
import { NotFoundPage } from 'pages/notFoundPage';

export const routeConfig: Record<AppRoutes, RouteObject> = {
	[AppRoutes.HOME]: {
		path: AppRoutes.HOME,
		element: <HomePage />
	},
	[AppRoutes.ABOUT]: {
		path: AppRoutes.ABOUT,
		element: <AboutPage />
	},
	[AppRoutes.NOT_FOUND]: {
		path: AppRoutes.NOT_FOUND,
		element: <NotFoundPage />
	}
};
