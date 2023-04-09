import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { selectCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
	test('Should return counter value', () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 }
		};

		expect(selectCounterValue(state as StateSchema)).toEqual(10);
	});
});
