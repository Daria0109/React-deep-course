import axios from 'axios';
import { userActions } from 'entities/user';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsynkThunk';
import { loginByUsername } from './loginUser';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('LoginUser thunk', () => {
	const userValue = { username: '123', id: '123' };
	const loginData = { username: '123', password: '123' };

	test('Successful login', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk(loginData);

		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
		expect(thunk.dispatch).toHaveBeenCalledTimes(4);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
	});

	test('Login with error', async () => {
		mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk(loginData);

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
	});
});
