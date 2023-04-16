import { StateSchema } from 'app/providers/storeProvider';

export const selectUsername = (state: StateSchema): string => state?.login?.username;

export const selectPassword = (state: StateSchema): string => state?.login?.password;

export const selectIsLoading = (state: StateSchema): boolean => state?.login?.isLoading;

export const selectError = (state: StateSchema): string => state?.login?.error;
