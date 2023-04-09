import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentRender } from 'shared/config/tests/ComponentRender/ComponentRender';
import { Counter } from './Counter';

describe('Counter', () => {
	test('Should be rendered', () => {
		ComponentRender(<Counter />, {
			initialState: { counter: { value: 10 } }
		});
		expect(screen.getByTestId('value-title')).toHaveTextContent('10');
	});

	test('Should increment', () => {
		ComponentRender(<Counter />, {
			initialState: { counter: { value: 10 } }
		});
		userEvent.click(screen.getByTestId('increment-btn'));
		expect(screen.getByTestId('value-title')).toHaveTextContent('11');
	});

	test('Should decrement', () => {
		ComponentRender(<Counter />, {
			initialState: { counter: { value: 10 } }
		});
		userEvent.click(screen.getByTestId('decrement-btn'));
		expect(screen.getByTestId('value-title')).toHaveTextContent('9');
	});
});
