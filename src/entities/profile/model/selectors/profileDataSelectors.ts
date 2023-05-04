import { StateSchema } from 'app/providers/storeProvider';
import { IUserProfile } from '../types/profile';

export const selectProfileData = (state: StateSchema): IUserProfile | undefined => state.profile?.data;

export const selectFetchProfileError = (state: StateSchema): number | undefined => state.profile?.error;

export const selectIsProfileDataLoading = (state: StateSchema): boolean => Boolean(state.profile?.isLoading);
