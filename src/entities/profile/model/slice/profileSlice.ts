import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserProfile, ProfileSchema } from '../types/profile';
import { fetchProfileData, updateProfileData } from '../services/profileData/profileData';

const initialState: ProfileSchema = {
	readonly: true,
	isLoading: false
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload;
		},
		cancelEdit: (state) => {
			state.validateError = undefined;
			state.readonly = true;
			state.form = state.data;
		},
		updateProfile: (state, action: PayloadAction<IUserProfile>) => {
			state.form = {
				...state.form,
				...action.payload
			};
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IUserProfile>) => {
				state.isLoading = false;
				state.data = action.payload;
				state.form = action.payload;
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(updateProfileData.pending, (state) => {
				state.validateError = undefined;
				state.isLoading = true;
			})
			.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IUserProfile>) => {
				state.isLoading = false;
				state.data = action.payload;
				state.form = action.payload;
				state.readonly = true;
				state.validateError = undefined;
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.validateError = action.payload;
			});
	}
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
