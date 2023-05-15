import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeOutput {
	theme: Theme;
	toggleTheme: () => void;
}

export const useTheme = (): UseThemeOutput => {
	const { theme, setTheme } = useContext(ThemeContext);

	useEffect(() => {
		if (theme) {
			document.body.className = theme;
		}
	}, [theme]);

	const toggleTheme = (): void => {
		let newTheme: Theme;

		switch (theme) {
			case Theme.DEFAULT:
				newTheme = Theme.LIGHT;
				break;
			case Theme.LIGHT:
				newTheme = Theme.DEFAULT;
				break;
			default: newTheme = Theme.DEFAULT;
		}

		setTheme?.(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return { theme: theme ?? Theme.DEFAULT, toggleTheme };
};
