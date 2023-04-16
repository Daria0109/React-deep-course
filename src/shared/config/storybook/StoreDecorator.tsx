import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story): any => (
	<StoreProvider initialState={state}>
		<StoryComponent />
	</StoreProvider>
);
