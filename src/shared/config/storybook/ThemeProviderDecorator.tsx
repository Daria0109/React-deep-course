import { Story } from '@storybook/react';
import { Theme, ThemeContext } from 'app/providers/themeProvider/lib/ThemeContext';

export const ThemeProviderDecorator = (theme: Theme) => (StoryComponent: Story): any => (
	// eslint-disable-next-line react/jsx-no-constructed-context-values
	<ThemeContext.Provider value={{ theme }}>
		<div className={`app ${theme}`}>
			<StoryComponent />
		</div>
	</ThemeContext.Provider>
);
