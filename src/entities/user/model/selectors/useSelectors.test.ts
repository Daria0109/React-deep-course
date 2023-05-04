import { StateSchema } from 'app/providers/storeProvider';
import { getAuthUserData } from './userSelectors';

describe('User selectors', () => {
	const state: DeepPartial<StateSchema> = {
		user: {
			authData: { username: 'John12345', id: '1' }
		}
	};

	describe('AuthUserData selector', () => {
		test('Should return AuthUserData', () => {
			expect(getAuthUserData(state as StateSchema))
				.toEqual({ username: 'John12345', id: '1' });
		});
	});
});
