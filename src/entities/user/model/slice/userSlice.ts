import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from 'entities/user/model/types/user';
import { removeAuthData } from 'entities/user/model/services/authUser';

const initialState: UserSchema = {
	_initialised: false
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
			state._initialised = true;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(removeAuthData.fulfilled, (state) => {
				state.authData = undefined;
			});
	}
});

export const { actions: userActions, reducer: userReducer } = userSlice;
