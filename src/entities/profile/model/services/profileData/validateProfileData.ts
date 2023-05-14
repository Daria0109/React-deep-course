import { IUserProfile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: IUserProfile): ValidateProfileError[] => {
	const { firstname, lastname, age, country } = profile ?? {};

	if (!profile) {
		return [ValidateProfileError.NO_DATA];
	}

	const errors: ValidateProfileError[] = [];

	if (!firstname || !lastname) {
		errors.push(ValidateProfileError.INCORRECT_USER_DATA);
	}

	if (!age || !Number.isInteger(age)) {
		errors.push(ValidateProfileError.INCORRECT_AGE);
	}

	if (!country) {
		errors.push(ValidateProfileError.INCORRECT_COUNTRY);
	}

	return errors;
};
