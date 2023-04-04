import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/routerProvider';
import { Header } from 'widgets/header/ui/Header';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'shared/ui/errorFallback/ErrorFallback';

export const App = (): JSX.Element => (
	<div className={classNames('app', {}, [])}>
		<Suspense fallback="">
			<Header />
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<div className="content-page">
					{/* <Sidebar /> */}
					<AppRouter />
				</div>
			</ErrorBoundary>
		</Suspense>
	</div>
);
