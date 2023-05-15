import { StateSchema } from 'app/providers/storeProvider';
import { selectAuthUserData, selectUserInitialised } from 'entities/user';

describe('User selectors', () => {
	const state: DeepPartial<StateSchema> = {
		user: {
			authData: { username: 'John12345', id: '1' },
			_initialised: true
		}
	};

	const emptyState = {};

	describe('AuthUserData selector', () => {
		test('Should return AuthUserData', () => {
			expect(selectAuthUserData(state as StateSchema))
				.toEqual({ username: 'John12345', id: '1' });
		});

		test('Should work with empty state', () => {
			expect(selectAuthUserData(emptyState as StateSchema)).toBeUndefined();
		});
	});

	describe('User initialised selector', () => {
		test('Should return initialised state', () => {
			expect(selectUserInitialised(state as StateSchema)).toBeTruthy();
		});

		test('Should work with empty state', () => {
			expect(selectUserInitialised(emptyState as StateSchema)).toBeFalsy();
		});
	});
});
