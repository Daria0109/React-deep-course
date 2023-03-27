import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';
import { Logo } from 'shared/ui/logo/Logo';
import { ThemeProviderDecorator } from 'shared/config/storybook/ThemeProviderDecorator';

export default {
	title: 'shared/Logo',
	component: Logo,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {};

export const PrimaryLight = Template.bind({});

PrimaryLight.args = {};

PrimaryLight.decorators = [ThemeProviderDecorator(Theme.LIGHT)];
