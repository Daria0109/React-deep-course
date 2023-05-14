import { StateSchema } from 'app/providers/storeProvider';
import { IUserProfile, ValidateProfileError } from '../types/profile';

export const selectProfileData = (state: StateSchema): IUserProfile => state.profile?.data ?? {};

export const selectProfileFormData = (state: StateSchema): IUserProfile => state.profile?.form ?? {};

export const selectFetchProfileError = (state: StateSchema): number | undefined => state.profile?.error;

export const selectIsProfileDataLoading = (state: StateSchema): boolean => Boolean(state.profile?.isLoading);

export const selectIsProfileReadonly = (state: StateSchema): boolean => Boolean(state.profile?.readonly);

export const selectProfileValidationErrors = (state: StateSchema): ValidateProfileError[] | undefined => state.profile?.validateError;
