import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { IUserProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<IUserProfile, undefined, ThunkConfig<number>>(
	'profile/fetchProfileData',
	async (_, { dispatch, extra, rejectWithValue }) => {
		try {
			const response = await extra.api.get<IUserProfile>('/profile');

			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (e) {
			return rejectWithValue(403);
		}
	}
);
