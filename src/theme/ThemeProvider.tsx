import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';
import { FC, useMemo, useState } from 'react';
import { Theme } from '../enums/theme';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DEFAULT;

const ThemeProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);
	
	const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);
	
	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;
