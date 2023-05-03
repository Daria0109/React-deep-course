import { AnyAction, configureStore, EnhancedStore, ReducersMapObject } from '@reduxjs/toolkit';
import { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { userReducer } from 'entities/user';
import { createReducerManager } from 'app/providers/storeProvider/lib/reducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>
): EnhancedStore<{}, AnyAction, [ThunkMiddlewareFor<{}>]> {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		user: userReducer
	};

	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore<StateSchema>({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

export type AppDispatchType = ReturnType<typeof createReduxStore>['dispatch'];
