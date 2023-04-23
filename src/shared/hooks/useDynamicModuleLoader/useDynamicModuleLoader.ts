import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKeys } from 'app/providers/storeProvider/lib/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
	[key in StateSchemaKeys]?: Reducer;
};

type ReducersListEntry = [StateSchemaKeys, Reducer];

export const useDynamicModuleLoader = (reducers: ReducersList, removeAfterUnmount: boolean): void => {
	const store = useStore() as ReduxStoreWithManager;

	useEffect(() => {
		Object.entries(reducers)
			.forEach(([key, reducer]: ReducersListEntry) => store.reducerManager.add(key, reducer));

		return (): void => {
			if (removeAfterUnmount) {
				Object.entries(reducers)
					.forEach(([key]: ReducersListEntry) => store.reducerManager.remove(key));
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
