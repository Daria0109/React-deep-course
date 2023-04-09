import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { selectCounter } from './getCounter';

describe('getCounter', () => {
	test('Should return counter state', () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 }
		};

		expect(selectCounter(state as StateSchema)).toEqual({ value: 10 });
	});
});
