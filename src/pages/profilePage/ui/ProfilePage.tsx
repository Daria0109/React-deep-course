import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useDynamicModuleLoader } from 'shared/hooks';
import { ReducersList } from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { profileReducer } from 'entities/profile';
// import cls from './ProfilePage.module.scss';

const reducersList: ReducersList = { profile: profileReducer };

interface IOwnProps {
    className?: string;
}

const ProfilePage: FC<IOwnProps> = (props): JSX.Element => {
	useDynamicModuleLoader(reducersList, true);
	const { t } = useTranslation();
	const { className } = props;

	return (
		<div className={classNames('', {}, [className])}>
			{t('Profile page')}
		</div>
	);
};

export default ProfilePage;
