import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/themeProvider';
import 'app/styles/index.scss';
import { App } from 'app/App';
import 'shared/config/i18n/i18n';
import { StoreProvider } from 'app/providers/storeProvider';

render(
	<StoreProvider>
		<BrowserRouter basename="/">
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</StoreProvider>,
	document.getElementById('root')
);
