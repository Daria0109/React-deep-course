import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import i18ForTests from 'shared/config/i18n/i18ForTests';
import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import { StateSchema, StoreProvider } from 'app/providers/storeProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface ComponentRenderOptions {
	route?: string;
	initialState?: DeepPartial<StateSchema>;
}

export const ComponentRender = (component: ReactNode, options: ComponentRenderOptions = {}): ReactNode => {
	const { route = '/', initialState } = options;

	return render(
		<StoreProvider initialState={initialState}>
			<MemoryRouter initialEntries={[route]}>
				<I18nextProvider i18n={i18ForTests}>
					{component}
				</I18nextProvider>
			</MemoryRouter>
		</StoreProvider>
	);
};
