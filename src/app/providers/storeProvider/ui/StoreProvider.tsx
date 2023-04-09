import { FC } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../lib/store';
import { StateSchema } from '../lib/StateSchema';

interface IOwnProps {
	initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<IOwnProps> = ({ children, initialState }) => {
	const store = createReduxStore(initialState as StateSchema);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};
