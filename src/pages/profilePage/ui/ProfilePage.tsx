import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useDynamicModuleLoader } from 'shared/hooks';
import { ReducersList } from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { EditableProfileCard, fetchProfileData, profileReducer } from 'entities/profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';

const reducersList: ReducersList = { profile: profileReducer };

interface IOwnProps {
    className?: string;
}

const ProfilePage: FC<IOwnProps> = ({ className }): JSX.Element => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	useDynamicModuleLoader(reducersList, true);

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchProfileData());
		}
	}, [dispatch]);

	return (
		<div className={classNames('', {}, [className])}>
			{t('Profile page')}
			<EditableProfileCard />
		</div>
	);
};

export default ProfilePage;
