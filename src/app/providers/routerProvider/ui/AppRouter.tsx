import { useRoutes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from '../lib/RouteConfig';

export const AppRouter = () => {
	const routes = useRoutes(Object.values(routeConfig));
	
	return (
		<Suspense fallback={<div>Loading...</div>}>
			{routes}
		</Suspense>
	);
}
