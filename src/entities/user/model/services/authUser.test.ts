import { StateSchema } from 'app/providers/storeProvider';
import { Dispatch } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';
import { userActions } from 'entities/user';
import { authDataInit, removeAuthData, saveAuthData } from './authUser';
import { User } from '../types/user';

describe('AuthUser thunks', () => {
	const authData: User = { username: 'TestUser', id: '123' };

	let dispatch: Dispatch;
	let getState: () => StateSchema;

	beforeEach(() => {
		dispatch = jest.fn();
		getState = jest.fn();

		jest.spyOn(window.localStorage.__proto__, 'setItem');
		jest.spyOn(window.localStorage.__proto__, 'getItem');
		jest.spyOn(window.localStorage.__proto__, 'removeItem');
	});

	test('Auth data is saved in local storage', async () => {
		const action = saveAuthData(authData);

		await action(dispatch, getState, {});

		expect(window.localStorage.__proto__.setItem).toHaveBeenCalledWith(
			USER_LOCALSTORAGE_KEY,
			JSON.stringify(authData)
		);
		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY))).toEqual(authData);
	});

	test('Auth data is returned from local storage', async () => {
		const action = authDataInit();

		await action(dispatch, getState, {});

		expect(window.localStorage.__proto__.getItem).toHaveBeenCalledWith(USER_LOCALSTORAGE_KEY);
		expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(authData));
		expect(dispatch).toHaveBeenCalledTimes(3);
	});

	test('Auth data is removed from local storage', async () => {
		const action = removeAuthData();

		await action(dispatch, getState, {});

		expect(window.localStorage.__proto__.removeItem).toHaveBeenCalledWith(USER_LOCALSTORAGE_KEY);
		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(localStorage.getItem(USER_LOCALSTORAGE_KEY)).toBeNull();
	});
});
