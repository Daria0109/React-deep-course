import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';
import { ThemeProviderDecorator } from 'shared/config/storybook/ThemeProviderDecorator';
import { Text, TextTheme } from './Text';

export default {
	title: 'shared/Text',
	component: Text,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	title: 'Lorem ipsum dolor sit amet',
	text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit erat torquent.'
};

export const PrimaryLight = Template.bind({});

PrimaryLight.args = {
	title: 'Lorem ipsum dolor sit amet',
	text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit erat torquent.'
};

PrimaryLight.decorators = [ThemeProviderDecorator(Theme.LIGHT)];

export const Error = Template.bind({});

Error.args = {
	title: 'Lorem ipsum dolor sit amet',
	text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit erat torquent.',
	theme: TextTheme.ERROR
};

export const TitleOnly = Template.bind({});

TitleOnly.args = {
	title: 'Lorem ipsum dolor sit amet'
};

export const TextOnly = Template.bind({});

TextOnly.args = {
	text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit erat torquent.'
};
