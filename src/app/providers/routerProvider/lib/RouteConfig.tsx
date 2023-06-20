import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/aboutPage';
import { AppRoutes } from 'shared/config/appRoutes/appRoutes';
import { HomePage } from 'pages/homePage';
import { NotFoundPage } from 'pages/notFoundPage';
import ProfilePage from 'pages/profilePage/ui/ProfilePage';
import { ArticlesPage } from 'pages/articlesPage';
import { ArticleDetailsPage } from 'pages/articleDetailsPage';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.HOME]: {
		path: AppRoutes.HOME,
		element: <HomePage />
	},
	[AppRoutes.ABOUT]: {
		path: AppRoutes.ABOUT,
		element: <AboutPage />
	},
	[AppRoutes.PROFILE]: {
		path: AppRoutes.PROFILE,
		element: <ProfilePage />,
		authOnly: true
	},
	[AppRoutes.ARTICLES]: {
		path: AppRoutes.ARTICLES,
		element: <ArticlesPage />,
		authOnly: true
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: `${AppRoutes.ARTICLE_DETAILS}:id`,
		element: <ArticleDetailsPage />,
		authOnly: true
	},
	[AppRoutes.NOT_FOUND]: {
		path: AppRoutes.NOT_FOUND,
		element: <NotFoundPage />
	}
};
