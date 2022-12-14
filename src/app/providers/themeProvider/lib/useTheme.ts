import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeOutput {
	theme: Theme;
	toggleTheme: () => void;
}

export const useTheme = (): UseThemeOutput => {
	const { theme, setTheme } = useContext(ThemeContext);

	console.log('theme', theme);

	const toggleTheme = (): void => {
		const newTheme = theme === Theme.DEFAULT ? Theme.LIGHT : Theme.DEFAULT;

		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return { theme, toggleTheme };
};
