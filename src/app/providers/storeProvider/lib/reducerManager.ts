import { AnyAction, CombinedState, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { IReducerManager, StateSchemaKeys } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): IReducerManager {
	const reducers = { ...initialReducers };

	let combinedReducer = combineReducers(reducers);

	let keysToRemove: StateSchemaKeys[] = [];

	return {
		getReducerMap: (): ReducersMapObject<StateSchema> => reducers,
		reduce: (state: StateSchema | undefined, action: AnyAction): CombinedState<StateSchema> => {
			if (keysToRemove.length > 0 && state) {
				const newState = { ...state };

				keysToRemove.forEach((key) => delete newState[key]);

				keysToRemove = [];
			}
			return combinedReducer(state, action);
		},
		add: (key: StateSchemaKeys, reducer: Reducer): void => {
			if (!key || reducers[key]) {
				return;
			}
			reducers[key] = reducer;
			combinedReducer = combineReducers(reducers);
		},
		remove: (key: StateSchemaKeys): void => {
			if (!key || !reducers[key]) {
				return;
			}
			delete reducers[key];
			keysToRemove.push(key);
			combinedReducer = combineReducers(reducers);
		}
	};
}
