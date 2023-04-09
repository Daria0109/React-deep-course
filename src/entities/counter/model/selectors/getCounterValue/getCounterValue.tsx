import { createSelector } from '@reduxjs/toolkit';
import { selectCounter } from '../getCounter/getCounter';

export const selectCounterValue = createSelector(
	selectCounter,
	(counter) => counter.value
);
