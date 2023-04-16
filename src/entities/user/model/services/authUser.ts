import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';
import { User, userActions } from 'entities/user';

export const saveAuthData = createAsyncThunk<void, User>(
	'user/saveAuthData',
	(userData) => {
		localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(userData));
	}
);
export const authDataInit = createAsyncThunk(
	'user/authDataInit',
	(arg, thunkAPI) => {
		const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

		if (user) {
			thunkAPI.dispatch(userActions.setAuthData(JSON.parse(user)));
		}
	}
);

export const removeAuthData = createAsyncThunk(
	'user/removeAuthData',
	() => {
		localStorage.removeItem(USER_LOCALSTORAGE_KEY);
	}
);
