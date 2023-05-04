import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useDynamicModuleLoader } from 'shared/hooks';
import { ReducersList } from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
// import cls from './ProfilePage.module.scss';

const reducersList: ReducersList = { profile: profileReducer };

interface IOwnProps {
    className?: string;
}

const ProfilePage: FC<IOwnProps> = ({ className }): JSX.Element => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	useDynamicModuleLoader(reducersList, true);

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<div className={classNames('', {}, [className])}>
			{t('Profile page')}
			<ProfileCard />
		</div>
	);
};

export default ProfilePage;
