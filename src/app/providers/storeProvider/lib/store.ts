import { AnyAction, configureStore, EnhancedStore, ReducersMapObject } from '@reduxjs/toolkit';
import { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { createReducerManager } from 'app/providers/storeProvider/lib/reducerManager';
import { StateSchema } from '../lib/StateSchema';

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>
): EnhancedStore<{}, AnyAction, [ThunkMiddlewareFor<{}>]> {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
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
