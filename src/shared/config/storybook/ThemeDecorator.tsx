import { Story } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';

export const ThemeModalDecorator = (theme: Theme) => (StoryComponent: Story): any => (
	<div className={`app ${theme}`}>
		<StoryComponent />
	</div>
);
