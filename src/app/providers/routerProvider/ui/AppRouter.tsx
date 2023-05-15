import { Route, Routes } from 'react-router-dom';
import { Suspense, useCallback } from 'react';
import { PageLoader } from 'widgets/pageLoader';
import { RequireAuth } from './RequireAuth';
import { AppRoutesProps, routeConfig } from '../lib/RouteConfig';

const AppRouter = (): JSX.Element => {
	const routerWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = (
			<Suspense fallback={<PageLoader />}>
				<div className="page-wrapper">
					{route.element}
				</div>
			</Suspense>
		);

		return (
			<Route
				key={route.path}
				path={route.path}
				element={route.authOnly
					? <RequireAuth>{element}</RequireAuth>
					: element}
			/>
		);
	}, []);

	return (
		<Routes>
			{Object.values(routeConfig).map(routerWithWrapper)}
		</Routes>
	);
};

export default AppRouter;
