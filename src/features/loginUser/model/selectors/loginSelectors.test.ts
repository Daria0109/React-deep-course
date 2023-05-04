import { StateSchema } from 'app/providers/storeProvider';
import { selectError, selectIsLoading, selectPassword, selectUsername } from './loginSelectors';

describe('Login selectors', () => {
	const state: DeepPartial<StateSchema> = {
		login: {
			username: 'John12345',
			password: '12345',
			isLoading: false,
			error: 403
		}
	};
	const emptyState = {};

	describe('Username selector', () => {
		test('Should return username', () => {
			expect(selectUsername(state as StateSchema)).toBe('John12345');
		});

		test('Should work with empty state', () => {
			expect(selectUsername(emptyState as StateSchema)).toBe('');
		});
	});

	describe('Password selector', () => {
		test('Should return password', () => {
			expect(selectPassword(state as StateSchema)).toBe('12345');
		});

		test('Should work with empty state', () => {
			expect(selectPassword(emptyState as StateSchema)).toBe('');
		});
	});

	describe('IsLoading selector', () => {
		test('Should return isLoading', () => {
			expect(selectIsLoading(state as StateSchema)).toBe(false);
		});

		test('Should work with empty state', () => {
			expect(selectIsLoading(emptyState as StateSchema)).toBe(false);
		});
	});

	describe('Error selector', () => {
		test('Should return error', () => {
			expect(selectError(state as StateSchema)).toBe(403);
		});

		test('Should work with empty state', () => {
			expect(selectError(emptyState as StateSchema)).toBeUndefined();
		});
	});
});
