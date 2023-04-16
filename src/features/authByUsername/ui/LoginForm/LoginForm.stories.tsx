import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
	title: 'features/LoginForm',
	component: LoginForm,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

Primary.decorators = [StoreDecorator({
	login: { username: 'admin', password: '123' }
})];

export const WithError = Template.bind({});

WithError.args = {};

WithError.decorators = [StoreDecorator({
	login: { username: 'admin', password: '123', error: 'Error has occured' }
})];

export const LoadingState = Template.bind({});

LoadingState.args = {};

LoadingState.decorators = [StoreDecorator({
	login: { username: 'admin', password: '123', isLoading: true }
})];
