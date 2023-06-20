import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProviderDecorator } from 'shared/config/storybook/ThemeProviderDecorator';
import { ArticlesPage } from 'pages/articlesPage';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';

export default {
	title: 'shared/ArticlesPage',
	component: ArticlesPage,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

Primary.decorators = [ThemeProviderDecorator(Theme.LIGHT)];
