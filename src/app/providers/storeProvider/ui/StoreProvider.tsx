import { FC } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../lib/store';
import { StateSchema } from '../lib/StateSchema';

interface IOwnProps {
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: ReducersMapObject<StateSchema>;
}

export const StoreProvider: FC<IOwnProps> = ({ children, initialState, asyncReducers }) => {
	const navigate = useNavigate();
	const store = createReduxStore(initialState as StateSchema, asyncReducers, navigate);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};
