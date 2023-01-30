import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof Button>;

// @ts-ignore
const Template: ComponentStory<typeof Button> = (args) => {};

export const Primary = Template.bind({});

Primary.args = {
	primary: true,
	label: 'Button'

};

export const Secondary = Template.bind({});

Secondary.args = { label: 'Button' };

