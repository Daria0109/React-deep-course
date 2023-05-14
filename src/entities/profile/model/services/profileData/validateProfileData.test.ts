import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import { ValidateProfileError } from 'entities/profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

describe('Validate profile data', () => {
	const profile = {
		firstname: 'User',
		lastname: 'Test',
		age: 26,
		currency: Currency.USD,
		country: Country.Belarus,
		city: 'City',
		username: 'User123',
		avatar: 'avatar/link'
	};

	test('Successful validation without errors', () => {
		const result = validateProfileData(profile);

		expect(result).toEqual([]);
	});

	test('NO_DATA error', () => {
		const result = validateProfileData();

		expect(result).toEqual([ValidateProfileError.NO_DATA]);
	});

	test('INCORRECT_USER_DATA error', () => {
		const result = validateProfileData({ ...profile, lastname: undefined });

		expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
	});

	test('INCORRECT_AGE and INCORRECT_COUNTRY errors', () => {
		const result = validateProfileData({ ...profile, age: 0, country: undefined });

		expect(result).toEqual([
			ValidateProfileError.INCORRECT_AGE,
			ValidateProfileError.INCORRECT_COUNTRY
		]);
	});
});
