import { AnyAction, configureStore, EnhancedStore, ReducersMapObject } from '@reduxjs/toolkit';
import { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { loginReducer } from 'features/authByUsername';
import { StateSchema } from '../lib/StateSchema';

export function createReduxStore(initialState?: StateSchema): EnhancedStore<{}, AnyAction, [ThunkMiddlewareFor<{}>]> {
	const rootReducers: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
		login: loginReducer
	};

	return configureStore<StateSchema>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
		preloadedState: initialState
	});
}
