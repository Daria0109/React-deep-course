import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/user';
import { saveAuthData } from 'entities/user/model/services/authUser';
import { ThunkConfig } from 'app/providers/storeProvider';

interface AuthDataParams {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<
	User,
	AuthDataParams,
	ThunkConfig<number>
>(
	'login/loginByUsername',
	async (authData, { dispatch, extra, rejectWithValue }) => {
		try {
			const response = await extra.api.post<User>('/login', authData);

			if (!response.data) {
				throw new Error();
			}

			dispatch(userActions.setAuthData(response.data));
			dispatch(saveAuthData(response.data));

			return response.data;
		} catch (e) {
			return rejectWithValue(403);
		}
	}
);
