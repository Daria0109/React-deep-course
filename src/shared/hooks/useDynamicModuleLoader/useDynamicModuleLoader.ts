import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKeys } from 'app/providers/storeProvider/lib/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
	[key in StateSchemaKeys]?: Reducer;
};

export const useDynamicModuleLoader = (reducers: ReducersList, removeAfterUnmount: boolean): void => {
	const store = useStore() as ReduxStoreWithManager;

	useEffect(() => {
		Object.entries(reducers)
			.forEach(([key, reducer]) => store.reducerManager.add(key as StateSchemaKeys, reducer));

		return (): void => {
			if (removeAfterUnmount) {
				Object.entries(reducers)
					.forEach(([key]) => store.reducerManager.remove(key as StateSchemaKeys));
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
