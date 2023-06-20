import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from 'widgets/headerNavigation';
import { ThemeProviderDecorator } from 'shared/config/storybook/ThemeProviderDecorator';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

export default {
	title: 'shared/Header',
	component: Header,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

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
