import {
	AnyAction,
	CombinedState,
	configureStore,
	EnhancedStore,
	MiddlewareArray,
	ReducersMapObject
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';
import { createReducerManager } from 'app/providers/storeProvider/lib/reducerManager';
import { $api } from 'shared/api/api';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router/dist/lib/context';
import { ThunkMiddleware } from 'redux-thunk';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
	navigate?: (to: To, options?: NavigateOptions) => void
): EnhancedStore<
	CombinedState<StateSchema>,
	AnyAction,
	MiddlewareArray<[ThunkMiddleware<CombinedState<StateSchema>, AnyAction, ThunkExtraArg>]>
> {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		user: userReducer
	};

	const reducerManager = createReducerManager(rootReducers);

	const extraArg: ThunkExtraArg = {
		api: $api,
		navigate
	};

	const store = configureStore({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: {
				extraArgument: extraArg
			}
		})
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	// @ts-ignore
	return store;
}

export type AppDispatchType = ReturnType<typeof createReduxStore>['dispatch'];
