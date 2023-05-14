import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from 'shared/ui/select/Select';

export default {
	title: 'shared/Select',
	component: Select,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	label: 'Choose value',
	options: [
		{ value: '1', content: 'First' },
		{ value: '2', content: 'Second' },
		{ value: '3', content: 'Third' }
	]
};
