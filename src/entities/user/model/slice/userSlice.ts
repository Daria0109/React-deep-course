import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from 'entities/user/model/types/user';
import { removeAuthData } from 'entities/user/model/services/authUser';

const initialState: UserSchema = {
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(removeAuthData.fulfilled, (state) => {
				state.authData = undefined;
			});
	}
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
