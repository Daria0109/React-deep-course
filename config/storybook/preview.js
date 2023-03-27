import 'app/styles/index.scss';
import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import '../../src/app/styles/index.scss';
import { Theme } from '../../src/app/providers/themeProvider/lib/ThemeContext';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { ThemeProviderDecorator } from '../../src/shared/config/storybook/ThemeProviderDecorator';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};

addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator(Theme.DEFAULT));
addDecorator(RouterDecorator);
addDecorator(ThemeProviderDecorator(Theme.DEFAULT));
