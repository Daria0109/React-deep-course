import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
	selectFetchProfileError,
	selectIsProfileDataLoading,
	selectIsProfileReadonly,
	selectProfileFormData,
	selectProfileValidationErrors
} from 'entities/profile/model/selectors/profileDataSelectors';
import { ProfilePageHeader } from 'entities/profile/ui/ProfilePageHeader/ProfilePageHeader';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from 'entities/profile';
import { Currency } from 'entities/currency';
import { Country } from 'entities/country';
import { TextElement, TextTheme } from 'shared/ui/text/TextElement';
import { ValidateProfileError } from 'entities/profile/model/types/profile';
import { useTranslation } from 'react-i18next';
import { ProfileCard } from '../ProfileCard/ProfileCard';
import cls from './EditableProfileCard.module.scss';

export const EditableProfileCard = (): JSX.Element => {
	const { t } = useTranslation('profile');

	const dispatch = useAppDispatch();
	const formData = useSelector(selectProfileFormData);
	const readonly = useSelector(selectIsProfileReadonly);
	const error = useSelector(selectFetchProfileError);
	const isLoading = useSelector(selectIsProfileDataLoading);
	const validationErrors = useSelector(selectProfileValidationErrors);

	const validationErrorsTranslations = {
		[ValidateProfileError.INCORRECT_USER_DATA]: t('incorrect_user_data'),
		[ValidateProfileError.INCORRECT_AGE]: t('incorrect_age'),
		[ValidateProfileError.INCORRECT_COUNTRY]: t('incorrect_country'),
		[ValidateProfileError.NO_DATA]: t('no_data'),
		[ValidateProfileError.SERVER_ERROR]: t('server_error')
	};

	const onChangeFirstname = useCallback((value?: string): void => {
		dispatch(profileActions.updateProfile({ firstname: value || '' }));
	}, [dispatch]);

	const onChangeLastname = useCallback((value?: string): void => {
		dispatch(profileActions.updateProfile({ lastname: value || '' }));
	}, [dispatch]);

	const onChangeAge = useCallback((value?: string): void => {
		dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
	}, [dispatch]);

	const onChangeCity = useCallback((value?: string): void => {
		dispatch(profileActions.updateProfile({ city: value || '' }));
	}, [dispatch]);

	const onChangeUsername = useCallback((value?: string): void => {
		dispatch(profileActions.updateProfile({ username: value || '' }));
	}, [dispatch]);

	const onChangeAvatar = useCallback((value?: string): void => {
		dispatch(profileActions.updateProfile({ avatar: value || '' }));
	}, [dispatch]);

	const onChangeCurrency = useCallback((currency?: Currency): void => {
		dispatch(profileActions.updateProfile({ currency: currency || Currency.USD }));
	}, [dispatch]);

	const onChangeCountry = useCallback((country?: Country): void => {
		dispatch(profileActions.updateProfile({ country: country || Country.Belarus }));
	}, [dispatch]);

	return (
		<div className={cls.profile}>
			<ProfilePageHeader />
			{validationErrors?.map((error) => (
				<TextElement
					key={error}
					theme={TextTheme.ERROR}
					text={validationErrorsTranslations[error]}
				/>
			))}
			<ProfileCard
				profile={formData}
				error={error}
				isLoading={isLoading}
				onChangeFirstname={onChangeFirstname}
				onChangeLastname={onChangeLastname}
				onChangeAge={onChangeAge}
				onChangeCity={onChangeCity}
				onChangeUsername={onChangeUsername}
				onChangeAvatar={onChangeAvatar}
				onChangeCurrency={onChangeCurrency}
				onChangeCountry={onChangeCountry}
				readonly={readonly}
			/>
		</div>
	);
};
