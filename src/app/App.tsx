import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/routerProvider';
import { HeaderNavigation } from 'widgets/headerNavigation/ui/HeaderNavigation';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'shared/ui/errorFallback/ErrorFallback';
import { useDispatch, useSelector } from 'react-redux';
import { authDataInit, selectUserInitialised } from 'entities/user';
import { useTheme } from './providers/themeProvider';

export const App = (): JSX.Element => {
	const { theme } = useTheme();
	const dispatch = useDispatch();

	const isUserInitialised = useSelector(selectUserInitialised);

	useEffect(() => {
		dispatch(authDataInit());
	}, [dispatch]);

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<HeaderNavigation />
				<ErrorBoundary FallbackComponent={ErrorFallback}>
					<div className="content-page">
						{isUserInitialised && <AppRouter />}
					</div>
				</ErrorBoundary>
			</Suspense>
		</div>
	);
};
