import { profileActions, profileReducer, ProfileSchema, updateProfileData } from 'entities/profile';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import { ValidateProfileError } from 'entities/profile/model/types/profile';

describe('Profile Slice', () => {
	const initialProfile = {
		firstname: 'User',
		lastname: 'Test',
		age: 26,
		currency: Currency.USD,
		country: Country.Belarus,
		city: 'City',
		username: 'User123',
		avatar: 'avatar/link'
	};
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

	test('Readonly is set', () => {
		const state: DeepPartial<ProfileSchema> = { readonly: true };

		expect(profileReducer(
			state as ProfileSchema,
			profileActions.setReadonly(false)
		)).toEqual({ readonly: false });
	});

	test('Edit mode is canceled', () => {
		const state: DeepPartial<ProfileSchema> = {
			readonly: false,
			form: { ...updatedProfile },
			data: { ...initialProfile }
		};

		expect(profileReducer(
			state as ProfileSchema,
			profileActions.cancelEdit()
		)).toEqual({
			readonly: true,
			form: { ...initialProfile },
			data: { ...initialProfile }
		});
	});

	test('Profile state data is updated', () => {
		const state: DeepPartial<ProfileSchema> = {
			form: { ...initialProfile }
		};

		expect(profileReducer(
			state as ProfileSchema,
			profileActions.updateProfile({ ...updatedProfile })
		)).toEqual({
			form: { ...updatedProfile }
		});
	});

	test('Service pending', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: false,
			validateError: [ValidateProfileError.SERVER_ERROR]
		};

		expect(profileReducer(
			state as ProfileSchema,
			updateProfileData.pending
		)).toEqual({
			isLoading: true
		});
	});

	test('Service fulfilled', () => {
		const state: DeepPartial<ProfileSchema> = {
			isLoading: true,
			readonly: false,
			data: { ...initialProfile },
			form: { ...updatedProfile }
		};

		expect(profileReducer(
			state as ProfileSchema,
			updateProfileData.fulfilled({ ...updatedProfile }, '', undefined)
		)).toEqual({
			isLoading: false,
			readonly: true,
			data: { ...updatedProfile },
			form: { ...updatedProfile }
		});
	});
});
