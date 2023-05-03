import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Sidebar } from 'widgets/sidebar';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';
import { ThemeProviderDecorator } from 'shared/config/storybook/ThemeProviderDecorator';

export default {
	title: 'widgets/Sidebar',
	component: Sidebar,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {};

export const PrimaryLight = Template.bind({});

PrimaryLight.args = {};

PrimaryLight.decorators = [ThemeProviderDecorator(Theme.LIGHT)];
