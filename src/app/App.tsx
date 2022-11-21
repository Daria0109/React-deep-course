import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { AppRouter } from 'app/providers/routerProvider';
import { Header } from 'widgets/header/ui/Header';

const App = () => {
	const { theme } = useTheme();
	
	return (
		<div className={classNames('app', {}, [theme])}>
			<Header />
			<AppRouter />
		</div>
	)
};

export default App;
