import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProviderDecorator } from 'shared/config/storybook/ThemeProviderDecorator';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';
import { CountrySelect } from 'entities/country';

export default {
	title: 'entities/CountrySelect',
	component: CountrySelect,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

export const PrimaryLight = Template.bind({});

PrimaryLight.args = {};

PrimaryLight.decorators = [ThemeProviderDecorator(Theme.LIGHT)];
