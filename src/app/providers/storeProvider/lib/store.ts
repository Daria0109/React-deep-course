import { AnyAction, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { counterReducer } from 'entities/counter';
import { StateSchema } from '../lib/StateSchema';

export function createReduxStore(initialState?: StateSchema): EnhancedStore<{}, AnyAction, [ThunkMiddlewareFor<{}>]> {
	return configureStore<StateSchema>({
		reducer: {
			counter: counterReducer
		},
		devTools: __IS_DEV__,
		preloadedState: initialState
	});
}
