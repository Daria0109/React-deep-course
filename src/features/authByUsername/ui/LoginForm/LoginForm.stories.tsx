import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { LoginFormAsync } from './LoginForm.lazy';

export default {
	title: 'features/LoginForm',
	component: LoginFormAsync,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof LoginFormAsync>;

const Template: ComponentStory<typeof LoginFormAsync> = (args) => <LoginFormAsync {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

Primary.decorators = [StoreDecorator({
	login: { username: 'admin', password: '123' }
})];

export const WithError = Template.bind({});

WithError.args = {};

WithError.decorators = [StoreDecorator({
	login: { username: 'admin', password: '123', error: 'Error has occurred' }
})];

export const LoadingState = Template.bind({});

LoadingState.args = {};

LoadingState.decorators = [StoreDecorator({
	login: { username: 'admin', password: '123', isLoading: true }
})];
