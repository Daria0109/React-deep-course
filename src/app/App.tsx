import { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { AppRouter } from 'app/providers/routerProvider';
import { Header } from 'widgets/header/ui/Header';
import { Sidebar } from 'widgets/sidebar';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'shared/ui/errorFallback/ErrorFallback';

function App(): JSX.Element {
	const { theme } = useTheme();

	return (
		<div className={classNames(
			'app', {}, [theme]
		)}
		>
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
}

export default App;
