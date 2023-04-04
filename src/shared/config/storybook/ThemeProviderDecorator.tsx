import { Story } from '@storybook/react';
import { ThemeProvider } from 'app/providers/themeProvider';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';

export const ThemeProviderDecorator = (theme: Theme) => (StoryComponent: Story): any => (
	<ThemeProvider initialTheme={theme}>
		<div className={`app ${theme}`}>
			<StoryComponent />
		</div>
	</ThemeProvider>
);
