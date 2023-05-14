import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CurrencySelect } from 'entities/currency';
import { ThemeProviderDecorator } from 'shared/config/storybook/ThemeProviderDecorator';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';

export default {
	title: 'entities/CurrencySelect',
	component: CurrencySelect,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

export const PrimaryLight = Template.bind({});

PrimaryLight.args = {};

PrimaryLight.decorators = [ThemeProviderDecorator(Theme.LIGHT)];
