import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProviderDecorator } from 'shared/config/storybook/ThemeProviderDecorator';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';
import { Modal } from './Modal';

export default {
	title: 'shared/Modal',
	component: Modal,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
	isOpen: true,
	children: 'Lorem ipsum dolor sit amet. A corrupti debitis et cupiditate omnis ut autem ipsam eos quia eligendi.'
};

export const PrimaryLight = Template.bind({});

PrimaryLight.args = {
	isOpen: true,
	children: 'Lorem ipsum dolor sit amet. A corrupti debitis et cupiditate omnis ut autem ipsam eos quia eligendi.'
};

PrimaryLight.decorators = [ThemeProviderDecorator(Theme.LIGHT)];
