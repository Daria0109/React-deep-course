import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/appLink/AppLink';
import { AppRoutes } from 'shared/config/appRoutes/appRoutes';
import { useTranslation } from 'react-i18next';
import cls from './Header.module.scss';

interface IOwnProps {
}

export const Header: FC<IOwnProps> = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <header className={classNames(cls.header)}>
            <div className={classNames(cls.content)}>
                <div className={classNames(cls.logo)} />
                <nav>
                    <ul className={classNames(cls.navList)}>
                        <AppLink to={AppRoutes.HOME}>{t('home_nav')}</AppLink>
                        <AppLink to={AppRoutes.ABOUT}>{t('about_nav')}</AppLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
