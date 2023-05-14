import { userActions } from 'entities/user';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsynkThunk';
import { loginByUsername } from './loginUser';

describe('LoginUser thunk', () => {
	const userValue = { username: '123', id: '123' };
	const loginData = { username: '123', password: '123' };

	test('Successful login', async () => {
		// @ts-ignore
		const thunk = new TestAsyncThunk(loginByUsername);

		thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
		const result = await thunk.callThunk(loginData);

		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
		expect(thunk.dispatch).toHaveBeenCalledTimes(4);
		expect(thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
	});

	test('Login with error', async () => {
		// @ts-ignore
		const thunk = new TestAsyncThunk(loginByUsername);

		thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk(loginData);

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(thunk.api.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
	});
});
