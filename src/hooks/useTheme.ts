import { Theme } from '../enums/theme';
import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../theme/ThemeContext';

interface UseThemeOutput {
	theme: Theme;
	toggleTheme: () => void;
}

export const useTheme = (): UseThemeOutput => {
	const { theme, setTheme } = useContext(ThemeContext);
	
	const toggleTheme = () => {
		const newTheme = theme === Theme.DEFAULT ? Theme.LIGHT : Theme.DEFAULT;
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};
	
	return { theme, toggleTheme };
}