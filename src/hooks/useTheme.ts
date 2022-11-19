import { Themes } from '../enums/theme';
import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../theme/ThemeContext';

interface UseThemeOutput {
	theme: Themes;
	toggleTheme: () => void;
}

export const useTheme = (): UseThemeOutput => {
	const { theme, setTheme } = useContext(ThemeContext);
	
	const toggleTheme = () => {
		const newTheme = theme === Themes.DEFAULT ? Themes.LIGHT : Themes.DEFAULT;
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};
	
	return { theme, toggleTheme };
}