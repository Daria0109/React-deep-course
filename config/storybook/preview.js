import 'app/styles/index.scss';
import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import '../../src/app/styles/index.scss';
import { Theme } from '../../src/app/providers/themeProvider/lib/ThemeContext';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { ThemeProviderDecorator } from '../../src/shared/config/storybook/ThemeProviderDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator';

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
addDecorator(RouterDecorator);
addDecorator(TranslationDecorator);
addDecorator(ThemeProviderDecorator(Theme.DEFAULT));
