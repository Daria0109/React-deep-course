import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { AppRouter } from 'app/providers/routerProvider';
import { Header } from 'widgets/header/ui/Header';
import { Sidebar } from 'widgets/sidebar';

const App = () => {
	const { theme } = useTheme();
	
	return (
		<div className={classNames('app', {}, [theme])}>
			<Header />
			<div className="content-page">
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	)
};

export default App;
