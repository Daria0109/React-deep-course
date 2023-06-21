import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderNavigation } from 'widgets/headerNavigation';
import { ThemeProviderDecorator } from 'shared/config/storybook/ThemeProviderDecorator';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
	title: 'shared/HeaderNavigation',
	component: HeaderNavigation,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof HeaderNavigation>;

const Template: ComponentStory<typeof HeaderNavigation> = (args) => <HeaderNavigation {...args} />;

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {};

PrimaryDark.decorators = [StoreDecorator({
	user: { authData: {} }
})];

export const PrimaryLight = Template.bind({});

PrimaryLight.args = {};

PrimaryLight.decorators = [StoreDecorator({
	user: { authData: {} }
}), ThemeProviderDecorator(Theme.LIGHT)];

export const Unauthorised = Template.bind({});

Unauthorised.args = {};

Unauthorised.decorators = [StoreDecorator({})];
