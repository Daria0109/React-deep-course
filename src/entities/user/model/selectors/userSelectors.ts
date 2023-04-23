import { StateSchema } from 'app/providers/storeProvider';
import { User } from 'entities/user';

export const getAuthUserData = (state: StateSchema): User => state.user.authData;
