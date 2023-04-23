import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/loginUser/model/types/LoginSchema';
import { loginByUsername } from 'features/loginUser/model/services/loginUser';

const initialState: LoginSchema = {
	isLoading: false,
	username: '',
	password: '',
	error: 0
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByUsername.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(loginByUsername.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(loginByUsername.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	}
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
