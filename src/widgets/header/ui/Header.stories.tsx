import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from 'widgets/header';
import { ThemeProviderDecorator } from 'shared/config/storybook/ThemeProviderDecorator';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';

export default {
	title: 'shared/Header',
	component: Header,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {};

export const PrimaryLight = Template.bind({});

PrimaryLight.args = {};

PrimaryLight.decorators = [ThemeProviderDecorator(Theme.LIGHT)];
