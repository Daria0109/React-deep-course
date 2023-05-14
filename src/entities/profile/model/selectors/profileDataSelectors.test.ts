import { StateSchema } from 'app/providers/storeProvider';
import { Country } from 'entities/country';
import { ValidateProfileError } from 'entities/profile/model/types/profile';
import { Currency } from 'entities/currency';
import {
	selectFetchProfileError,
	selectIsProfileDataLoading,
	selectIsProfileReadonly,
	selectProfileData,
	selectProfileFormData, selectProfileValidationErrors
} from './profileDataSelectors';

describe('Profile selectors', () => {
	const state: DeepPartial<StateSchema> = {
		profile: {
			readonly: true,
			isLoading: true,
			data: {
				firstname: 'User',
				lastname: 'Test',
				age: 26,
				currency: Currency.USD,
				country: Country.Belarus,
				city: 'City',
				username: 'User123',
				avatar: 'avatar/link'
			},
			validateError: [ValidateProfileError.SERVER_ERROR],
			error: 500,
			form: {
				firstname: 'User',
				lastname: 'Test',
				age: 26,
				currency: Currency.USD,
				country: Country.Belarus,
				city: 'City',
				username: 'User123',
				avatar: 'avatar/link'
			}
		}
	};
	const emptyState = {};

	describe('Profile data selector', () => {
		test('Should return profile data', () => {
			expect(selectProfileData(state as StateSchema)).toEqual({
				firstname: 'User',
				lastname: 'Test',
				age: 26,
				currency: Currency.USD,
				country: Country.Belarus,
				city: 'City',
				username: 'User123',
				avatar: 'avatar/link'
			});
		});

		test('Should work with empty state', () => {
			expect(selectProfileData(emptyState as StateSchema)).toEqual({});
		});
	});

	describe('Profile form data selector', () => {
		test('Should return form data', () => {
			expect(selectProfileFormData(state as StateSchema)).toEqual({
				firstname: 'User',
				lastname: 'Test',
				age: 26,
				currency: Currency.USD,
				country: Country.Belarus,
				city: 'City',
				username: 'User123',
				avatar: 'avatar/link'
			});
		});

		test('Should work with empty state', () => {
			expect(selectProfileFormData(emptyState as StateSchema)).toEqual({});
		});
	});

	describe('Profile error selector', () => {
		test('Should return fetch profile error', () => {
			expect(selectFetchProfileError(state as StateSchema)).toBe(500);
		});

		test('Should work with empty state', () => {
			expect(selectFetchProfileError(emptyState as StateSchema)).toBeUndefined();
		});
	});

	describe('Profile data loading selector', () => {
		test('Should return isLoading', () => {
			expect(selectIsProfileDataLoading(state as StateSchema)).toBeTruthy();
		});

		test('Should work with empty state', () => {
			expect(selectIsProfileDataLoading(emptyState as StateSchema)).toBeFalsy();
		});
	});

	describe('Profile readonly selector', () => {
		test('Should return readonly', () => {
			expect(selectIsProfileReadonly(state as StateSchema)).toBeTruthy();
		});

		test('Should work with empty state', () => {
			expect(selectIsProfileReadonly(emptyState as StateSchema)).toBeFalsy();
		});
	});

	describe('Profile validation errors selector', () => {
		test('Should return validation errors', () => {
			expect(selectProfileValidationErrors(state as StateSchema)).toEqual([ValidateProfileError.SERVER_ERROR]);
		});

		test('Should work with empty state', () => {
			expect(selectProfileValidationErrors(emptyState as StateSchema)).toBeUndefined();
		});
	});
});
