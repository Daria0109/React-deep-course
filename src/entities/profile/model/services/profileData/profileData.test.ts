import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsynkThunk';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import { ValidateProfileError } from '../../types/profile';
import { fetchProfileData, updateProfileData } from './profileData';

describe('FetchProfileData thunk', () => {
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

	test('Return profile data successfully', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);

		thunk.api.get.mockReturnValue(Promise.resolve({ data: profile }));
		const result = await thunk.callThunk();

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(profile);
	});

	test('Return profile data with error', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);

		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
	});
});

describe('UpdateProfileData thunk', () => {
	const updatedProfile = {
		firstname: 'Super',
		lastname: 'User',
		age: 38,
		currency: Currency.EUR,
		country: Country.Canada,
		city: 'New City',
		username: 'SuperUser',
		avatar: 'avatar/new/link'
	};

	test('Update profile data successfully', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: updatedProfile
			}
		});

		thunk.api.put.mockReturnValue(Promise.resolve({ data: updatedProfile }));
		const result = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(updatedProfile);
	});

	test('Update profile data with server error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: updatedProfile
			}
		});

		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
	});

	test('Update profile data with validation error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: { ...updatedProfile, lastname: '' }
			}
		});

		const result = await thunk.callThunk();

		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
	});
});
