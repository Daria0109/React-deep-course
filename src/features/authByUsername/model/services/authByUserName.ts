import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/user';
import axios from 'axios';
import i18n from 'shared/config/i18n/i18n';
import { saveAuthData } from 'entities/user/model/services/authUser';

interface AuthDataParams {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<User, AuthDataParams, { rejectValue: string }>(
	'login/loginByUsername',
	async (authData, thunkAPI) => {
		try {
			const response = await axios.post<User>('http://localhost:3001/login', authData);

			if (!response.data) {
				throw new Error();
			}

			thunkAPI.dispatch(userActions.setAuthData(response.data));
			thunkAPI.dispatch(saveAuthData(response.data));

			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(i18n.t('login_error'));
		}
	}
);
