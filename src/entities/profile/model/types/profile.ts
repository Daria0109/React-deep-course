import { Country, Currency } from 'shared/constants/common';

export interface IUserProfile {
	firstname: string,
	lastname: string,
	age: number,
	currency: Currency,
	country: Country,
	city: string,
	username: string,
	avatar: string
}

export interface ProfileSchema {
	readonly: boolean;
	isLoading: boolean;
	data?: IUserProfile;
	error?: string;
}
