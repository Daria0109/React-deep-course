import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { selectProfileFormData } from 'entities/profile/model/selectors/profileDataSelectors';
import { validateProfileData } from 'entities/profile/model/services/profileData/validateProfileData';
import { IUserProfile, ValidateProfileError } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<IUserProfile, undefined, ThunkConfig<number>>(
	'profile/fetchProfileData',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI;

		try {
			const response = await extra.api.get<IUserProfile>('/profile');

			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (e) {
			return rejectWithValue(500);
		}
	}
);

export const updateProfileData = createAsyncThunk<IUserProfile, undefined, ThunkConfig<ValidateProfileError[]>>(
	'profile/updateProfileData',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue, getState } = thunkAPI;

		const formData = selectProfileFormData(getState());

		const errors = validateProfileData(formData);

		if (errors.length) {
			return rejectWithValue(errors);
		}

		try {
			const response = await extra.api.put<IUserProfile>('/profile', formData);

			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (e) {
			return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
		}
	}
);
