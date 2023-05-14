import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { TextElement } from 'shared/ui/text/TextElement';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectIsProfileReadonly } from 'entities/profile/model/selectors/profileDataSelectors';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { profileActions, updateProfileData } from 'entities/profile';
import cls from './ProfilePageHeader.module.scss';

interface IOwnProps {
    className?: string;
}

export const ProfilePageHeader: FC<IOwnProps> = (props): JSX.Element => {
	const { className } = props;
	const { t: profileTranslation } = useTranslation('profile');
	const { t: generalTranslation } = useTranslation();

	const dispatch = useAppDispatch();
	const readonly = useSelector(selectIsProfileReadonly);

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onSave = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);

	return (
		<div className={classNames(cls.profileHeader, {}, [className])}>
			<TextElement title={profileTranslation('profile')} />
			{readonly
				? (
					<Button
						onClick={onEdit}
						theme={ThemeButton.OUTLINED}
						className={cls.profileHeader__editBtn}
					>
						{generalTranslation('edit_btn')}
					</Button>
				)
				: (
					<div className={cls.profileHeader__controls}>
						<Button
							onClick={onCancelEdit}
							theme={ThemeButton.OUTLINED}
						>
							{generalTranslation('cancel_btn')}
						</Button>
						<Button
							onClick={onSave}
							theme={ThemeButton.FILLED}
						>
							{generalTranslation('save_btn')}
						</Button>
					</div>
				)}

		</div>
	);
};
