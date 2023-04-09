import { counterReducer, CounterSchema } from 'entities/counter';
import { counterActions } from 'entities/counter/model/slice/counterSlice';

describe('counterSlice', () => {
	test('should work with empty state', () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
	});

	test('increment', () => {
		const state: CounterSchema = { value: 10 };

		expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
	});

	test('should work with empty state', () => {
		const state: CounterSchema = { value: 10 };

		expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
	});
});
