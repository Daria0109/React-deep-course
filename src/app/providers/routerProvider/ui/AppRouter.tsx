import { useRoutes } from 'react-router-dom';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/pageLoader';
import { routeConfig } from '../lib/RouteConfig';

export const AppRouter = (): JSX.Element => {
	const routes = useRoutes(Object.values(routeConfig));

	return (
		<Suspense fallback={<PageLoader />}>
			<div className="page-wrapper">
				{routes}
			</div>
		</Suspense>
	);
};
