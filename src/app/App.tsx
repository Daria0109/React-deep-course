import './styles/index.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { AppRouter } from 'app/providers/routerProvider';

const App = () => {
	const { theme, toggleTheme } = useTheme();
	
	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Toggle</button>
			<Link to="/">Main page</Link>
			<Link to="/about">About page</Link>
			<AppRouter />
		</div>
	)
};

export default App;
