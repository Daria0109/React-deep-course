import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from 'entities/profile/ui/ProfileCard/ProfileCard';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';

export default {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	profile: {
		firstname: 'User',
		lastname: 'Test',
		age: 26,
		currency: Currency.USD,
		country: Country.Belarus,
		city: 'City',
		username: 'User123',
		avatar: 'https://as1.ftcdn.net/v2/jpg/03/11/51/96/1000_F_311519626_8dqhLvFrTWkTZCMWs3YSHSOtpmhdOBTN.jpg'
	}
};

export const WithError = Template.bind({});

WithError.args = {
	error: 500
};

export const LoadingState = Template.bind({});

LoadingState.args = {
	isLoading: true
};
