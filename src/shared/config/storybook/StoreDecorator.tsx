import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/loginUser/model/slice/loginSlice';
import { ReducersList } from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { profileReducer } from 'entities/profile';

const defaultAsyncReducers: ReducersList = {
	login: loginReducer,
	profile: profileReducer
};

export const StoreDecorator = (
	state: DeepPartial<StateSchema>,
	asyncReducers?: ReducersList
) => (StoryComponent: Story): any => (
	<StoreProvider
		initialState={state}
		asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers } as ReducersMapObject<StateSchema>}
	>
		<StoryComponent />
	</StoreProvider>
);
