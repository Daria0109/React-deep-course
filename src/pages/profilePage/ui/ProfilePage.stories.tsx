import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import ProfilePage from 'pages/profilePage/ui/ProfilePage';
import { ThemeProviderDecorator } from 'shared/config/storybook/ThemeProviderDecorator';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';

export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	argTypes: { backgroundColor: { control: 'color' } }
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

Primary.decorators = [StoreDecorator({
	profile: {
		form: {
			firstname: 'User',
			lastname: 'Test',
			age: 26,
			currency: Currency.USD,
			country: Country.Belarus,
			city: 'City',
			username: 'User123',
			avatar: 'https://as1.ftcdn.net/v2/jpg/03/11/51/96/1000_F_311519626_8dqhLvFrTWkTZCMWs3YSHSOtpmhdOBTN.jpg'
		}
	}
})];

export const PrimaryLight = Template.bind({});

PrimaryLight.args = {};

PrimaryLight.decorators = [
	StoreDecorator({
		profile: {
			form: {
				firstname: 'User',
				lastname: 'Test',
				age: 26,
				currency: Currency.USD,
				country: Country.Belarus,
				city: 'City',
				username: 'User123',
				avatar: 'https://as1.ftcdn.net/v2/jpg/03/11/51/96/1000_F_311519626_8dqhLvFrTWkTZCMWs3YSHSOtpmhdOBTN.jpg'
			}
		}
	}),
	ThemeProviderDecorator(Theme.LIGHT)
];
