import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from 'shared/ui/avatar/Avatar';
import AvatarImage from './storybook-avatar.jpeg';

export default {
	title: 'shared/Avatar',
	component: Avatar,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
	<div style={{ padding: '20px' }}>
		<Avatar {...args} />
	</div>
);

export const Default = Template.bind({});

Default.args = {
	src: AvatarImage,
	alt: 'Test user'
};

export const Large = Template.bind({});

Large.args = {
	size: 300,
	src: AvatarImage,
	alt: 'Test user'
};

export const Small = Template.bind({});

Small.args = {
	size: 50,
	src: AvatarImage,
	alt: 'Test user'
};

