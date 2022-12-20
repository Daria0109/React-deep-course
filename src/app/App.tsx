import { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { AppRouter } from 'app/providers/routerProvider';
import { Header } from 'widgets/header/ui/Header';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'shared/ui/errorFallback/ErrorFallback';

export const App = (): JSX.Element => {
	const { theme } = useTheme();

	console.log(theme);

	      return (
		<div className={classNames('app', {}, [theme])}>
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
};
