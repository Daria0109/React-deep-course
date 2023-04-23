import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/loginUser/model/slice/loginSlice';
import { LoginSchema } from 'features/loginUser';

const defaultAsyncReducers: ReducersMapObject<{ login: LoginSchema }> = {
	login: loginReducer
};

export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story): any => (
	<StoreProvider
		initialState={state}
		asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers } as ReducersMapObject<StateSchema>}
	>
		<StoryComponent />
	</StoreProvider>
);
