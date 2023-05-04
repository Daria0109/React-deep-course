import { StateSchema } from 'app/providers/storeProvider';

export const selectUsername = (state: StateSchema): string => state?.login?.username ?? '';

export const selectPassword = (state: StateSchema): string => state?.login?.password ?? '';

export const selectIsLoading = (state: StateSchema): boolean => Boolean(state?.login?.isLoading);

export const selectError = (state: StateSchema): number | undefined => state?.login?.error;
