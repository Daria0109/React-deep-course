import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/loginUser';
import { AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/profile';
import { AxiosInstance } from 'axios';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router/dist/lib/context';

export interface StateSchema {
	user: UserSchema;

	// Async reducers
	login?: LoginSchema;
	profile?: ProfileSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export interface IReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema | undefined, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKeys, reducer: Reducer) => void;
	remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: IReducerManager;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
	navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	dispatch?: Dispatch;
}
