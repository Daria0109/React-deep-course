import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProviderDecorator } from 'shared/config/storybook/ThemeProviderDecorator';
import { ArticleDetailsPage } from 'pages/articleDetailsPage';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';

export default {
	title: 'shared/ArticleDetailsPage',
	component: ArticleDetailsPage,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

Primary.decorators = [ThemeProviderDecorator(Theme.LIGHT)];
