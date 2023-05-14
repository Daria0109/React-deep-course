import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TextAlignment, TextElement, TextTheme } from 'shared/ui/text/TextElement';
import { Input } from 'shared/ui/input/Input';
import { IUserProfile } from 'entities/profile';
import { Loader } from 'shared/ui/loader/Loader';
import { serverErrors } from 'shared/constants/serverErrors';
import { Avatar } from 'shared/ui/avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/currency';
import { Country, CountrySelect } from 'entities/country';
import cls from './ProfileCard.module.scss';

interface IOwnProps {
	isLoading: boolean;
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
	onChangeAge?: (value?: string) => void;
	onChangeCity?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeAvatar?: (value?: string) => void;
	onChangeCurrency?: (currency?: Currency) => void;
	onChangeCountry?: (country?: Country) => void;
	profile?: IUserProfile;
	error?: number;
	readonly?: boolean;
    className?: string;
}

export const ProfileCard = memo((props: IOwnProps): JSX.Element => {
	const {
		profile,
		error,
		isLoading,
		className,
		readonly,
		onChangeLastname,
		onChangeFirstname,
		onChangeCity,
		onChangeAge,
		onChangeUsername,
		onChangeAvatar,
		onChangeCurrency,
		onChangeCountry
	} = props;
	const { t: profileTranslation } = useTranslation('profile');
	const { t: generalTranslation } = useTranslation();

	if (isLoading) {
		return (
			<div className={classNames(cls.profileCard, {}, [cls.profileCard_loading, className])}>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div className={classNames(cls.profileCard, {}, [cls.profileCard_error, className])}>
				<TextElement
					title={generalTranslation(serverErrors[error])}
					text={generalTranslation('request_error_sub')}
					theme={TextTheme.ERROR}
					align={TextAlignment.CENTER}
				/>
			</div>
		);
	}

	return (
		<div className={classNames(cls.profileCard, {}, [className])}>
			<div className={cls.profileCard__data}>
				{profile?.avatar && <Avatar src={profile.avatar} alt={profile?.username || 'User'} />}
				<Input
					value={profile?.firstname}
					onChange={onChangeFirstname}
					placeholder={profileTranslation('firstname_placeholder')}
					className={cls.profileCard__input}
					readonly={readonly}
				/>
				<Input
					value={profile?.lastname}
					onChange={onChangeLastname}
					placeholder={profileTranslation('lastname_placeholder')}
					className={cls.profileCard__input}
					readonly={readonly}
				/>
				<Input
					value={profile?.username}
					onChange={onChangeUsername}
					placeholder={profileTranslation('username_placeholder')}
					className={cls.profileCard__input}
					readonly={readonly}
				/>
				<Input
					type="number"
					value={profile?.age}
					onChange={onChangeAge}
					placeholder={profileTranslation('age_placeholder')}
					className={cls.profileCard__input}
					readonly={readonly}
				/>
				<Input
					value={profile?.city}
					onChange={onChangeCity}
					placeholder={profileTranslation('city_placeholder')}
					className={cls.profileCard__input}
					readonly={readonly}
				/>
				<Input
					value={profile?.avatar}
					onChange={onChangeAvatar}
					placeholder={profileTranslation('avatar_placeholder')}
					className={cls.profileCard__input}
					readonly={readonly}
				/>
				<CurrencySelect
					value={profile?.currency}
					onChange={onChangeCurrency}
					readonly={readonly}
				/>
				<CountrySelect
					value={profile?.country}
					onChange={onChangeCountry}
					readonly={readonly}
				/>
			</div>
		</div>
	);
});
