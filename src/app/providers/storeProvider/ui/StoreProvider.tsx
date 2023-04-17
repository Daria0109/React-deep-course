import { FC } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../lib/store';
import { StateSchema } from '../lib/StateSchema';

interface IOwnProps {
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: ReducersMapObject<StateSchema>;
}

export const StoreProvider: FC<IOwnProps> = ({ children, initialState, asyncReducers }) => {
	const store = createReduxStore(initialState as StateSchema, asyncReducers);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};
