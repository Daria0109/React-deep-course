import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserSelect } from 'shared/ui/select/Select';

export default {
	title: 'shared/Select',
	component: UserSelect,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof UserSelect>;

const Template: ComponentStory<typeof UserSelect> = (args) => <UserSelect {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	label: 'Choose value',
	options: [
		{ value: '1', label: 'First' },
		{ value: '2', label: 'Second' },
		{ value: '3', label: 'Third' }
	]
};
