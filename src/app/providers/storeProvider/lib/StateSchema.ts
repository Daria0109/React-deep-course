import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/loginUser';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/profile';

export interface StateSchema {
	user: UserSchema;

	// Async reducers
	login?: LoginSchema;
	profile?: ProfileSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export interface IReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKeys, reducer: Reducer) => void;
	remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: IReducerManager;
}
