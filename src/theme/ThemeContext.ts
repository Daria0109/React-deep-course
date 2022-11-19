import { createContext } from 'react';
import { Themes } from '../enums/theme';

export interface ThemeContextProps {
	theme?: Themes;
	setTheme?: (theme: Themes) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
