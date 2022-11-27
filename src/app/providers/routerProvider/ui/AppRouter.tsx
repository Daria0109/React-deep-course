import { useRoutes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from '../lib/RouteConfig';
import { useTranslation } from 'react-i18next';

export const AppRouter = () => {
	const { t } = useTranslation();
	const routes = useRoutes(Object.values(routeConfig));
	
	return (
		<Suspense fallback={<div>{t('loading')}</div>}>
			<div className="page-wrapper">
				{routes}
			</div>
		</Suspense>
	);
}
