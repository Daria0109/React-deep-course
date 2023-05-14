import { useRoutes, RouteObject } from 'react-router-dom';
import { Suspense, useMemo } from 'react';
import { PageLoader } from 'widgets/pageLoader';
import { useSelector } from 'react-redux';
import { getAuthUserData } from 'entities/user/model/selectors/userSelectors';
import { routeConfig } from '../lib/RouteConfig';

const AppRouter = (): JSX.Element => {
	const isAuth = useSelector(getAuthUserData);

	const routesConfig = useMemo(() => Object.values(routeConfig).filter((route) => {
		if (route.authOnly && !isAuth) {
			return false;
		}
		return true;
	}), [isAuth]);

	const routes = useRoutes(routesConfig as RouteObject[]);

	return (
		<Suspense fallback={<PageLoader />}>
			<div className="page-wrapper">
				{routes}
			</div>
		</Suspense>
	);
};

export default AppRouter;
