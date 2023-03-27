import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';
import { ThemeProviderDecorator } from 'shared/config/storybook/ThemeProviderDecorator';
import { Button, ThemeButton } from './Button';

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	children: 'Standard Button'
};

export const Clear = Template.bind({});

Clear.args = {
	theme: ThemeButton.CLEAR,
	children: 'Clear Button'
};

export const Outlined = Template.bind({});

Outlined.args = {
	theme: ThemeButton.OUTLINED,
	children: 'Outlined Default'
};

export const OutlinedLight = Template.bind({});

OutlinedLight.args = {
	theme: ThemeButton.OUTLINED,
	children: 'Outlined Light'
};

OutlinedLight.decorators = [ThemeProviderDecorator(Theme.LIGHT)];
