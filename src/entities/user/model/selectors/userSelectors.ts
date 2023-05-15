import { StateSchema } from 'app/providers/storeProvider';
import { User } from 'entities/user';

export const selectAuthUserData = (state: StateSchema): User | undefined => state?.user?.authData;

export const selectUserInitialised = (state: StateSchema): boolean => Boolean(state?.user?._initialised);
