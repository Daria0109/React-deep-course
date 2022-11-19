import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';
import { FC, useMemo, useState } from 'react';
import { Themes } from '../enums/theme';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.DEFAULT;

const ThemeProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<Themes>(defaultTheme);
	
	const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);
	
	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;
