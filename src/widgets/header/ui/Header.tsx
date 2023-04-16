import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/appLink/AppLink';
import { AppRoutes } from 'shared/config/appRoutes/appRoutes';
import { useTranslation } from 'react-i18next';
import { Logo } from 'shared/ui/logo/Logo';
import { ThemeSwitcher } from 'shared/ui/themeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/langSwitcher/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import { LoginModal } from 'features/authByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserData } from 'entities/user/model/selectors/selectors';
import { removeAuthData } from 'entities/user';
import cls from './Header.module.scss';

export const Header: FC = (): JSX.Element => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getAuthUserData);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(removeAuthData());
	}, [dispatch]);

	return (
		<header className={classNames(cls.header)}>
			<div className={classNames(cls.header__wrapper)}>
				<Logo />
				{authData
					? (
						<div className={classNames(cls.header__main)}>
							<nav>
								<ul className={classNames(cls.header__navList)}>
									<AppLink to={AppRoutes.HOME}>{t('home_nav')}</AppLink>
									<AppLink to={AppRoutes.ABOUT}>{t('about_nav')}</AppLink>
								</ul>
							</nav>
							<Button
								onClick={onLogout}
								theme={ThemeButton.OUTLINED}
							>
								{t('logout_button')}
							</Button>
							<ThemeSwitcher />
							<LangSwitcher />
						</div>
					)
					: (
						<Button
							onClick={onShowModal}
							theme={ThemeButton.OUTLINED}
						>
							{t('login_button')}
						</Button>
					)}

			</div>
			<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
		</header>
	);
};
