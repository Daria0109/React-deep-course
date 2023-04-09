import { StateSchema } from 'app/providers/storeProvider';
import { CounterSchema } from 'entities/counter';

export const selectCounter = (state: StateSchema): CounterSchema => state.counter;
