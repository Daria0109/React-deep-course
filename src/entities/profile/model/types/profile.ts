import { Currency } from 'entities/currency';
import { Country } from 'entities/country';

export enum ValidateProfileError {
	INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
	INCORRECT_AGE = 'INCORRECT_AGE',
	INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
	NO_DATA = 'NO_DATA',
	SERVER_ERROR = 'SERVER_ERROR'
}

export interface IUserProfile {
	firstname?: string,
	lastname?: string,
	age?: number,
	currency?: Currency,
	country?: Country,
	city?: string,
	username?: string,
	avatar?: string
}

export interface ProfileSchema {
	readonly: boolean;
	isLoading: boolean;
	data?: IUserProfile;
	form?: IUserProfile;
	error?: number;
	validateError?: ValidateProfileError[];
}
