import { loginActions, loginReducer } from 'features/loginUser/model/slice/loginSlice';
import { LoginSchema } from 'features/loginUser';

describe('Login Slice', () => {
	test('Username is set successfully', () => {
		const state: DeepPartial<LoginSchema> = { username: '' };

		expect(loginReducer(
			state as LoginSchema,
			loginActions.setUsername('TestUser')
		)).toEqual({ username: 'TestUser' });
	});

	test('Password is set successfully', () => {
		const state: DeepPartial<LoginSchema> = { password: '' };

		expect(loginReducer(
			state as LoginSchema,
			loginActions.setPassword('12345')
		)).toEqual({ password: '12345' });
	});
});
