import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TextElement } from 'shared/ui/text/TextElement';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/input/Input';
import {
	selectFetchProfileError,
	selectIsProfileDataLoading,
	selectProfileData
} from '../../model/selectors/profileDataSelectors';
import cls from './ProfileCard.module.scss';

interface IOwnProps {
    className?: string;
}

export const ProfileCard: FC<IOwnProps> = (props): JSX.Element => {
	const { className } = props;
	const { t } = useTranslation('profile');

	const profile = useSelector(selectProfileData);
	const error = useSelector(selectFetchProfileError);
	const isLoading = useSelector(selectIsProfileDataLoading);

	return (
		<div className={classNames(cls.profileCard, {}, [className])}>
			<div className={cls.profileCard__header}>
				<TextElement title={t('profile')} />
				<Button
					theme={ThemeButton.OUTLINED}
					className={cls.profileCard__editBtn}
				>
					{t('edit_btn')}
				</Button>
			</div>
			<div className={cls.profileCard__data}>
				<Input
					value={profile?.firstname}
					placeholder={t('firstname_placeholder')}
					className={cls.profileCard__input}
				/>
				<Input
					value={profile?.lastname}
					placeholder={t('lastname_placeholder')}
				/>
			</div>
		</div>
	);
};
