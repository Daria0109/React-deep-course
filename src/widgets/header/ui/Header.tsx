import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/appLink/AppLink';
import { AppRoutes } from 'shared/config/appRoutes/appRoutes';
import { useTranslation } from 'react-i18next';
import { Logo } from 'shared/ui/logo/Logo';
import { ThemeSwitcher } from 'shared/ui/themeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/langSwitcher/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import { Modal } from 'shared/ui/modal/Modal';
import cls from './Header.module.scss';

export const Header: FC = (): JSX.Element => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);

	return (
		<header className={classNames(cls.header)}>
			<div className={classNames(cls.header__wrapper)}>
				<Logo />
				<div className={classNames(cls.header__main)}>
					<nav>
						<ul className={classNames(cls.header__navList)}>
							<AppLink to={AppRoutes.HOME}>{t('home_nav')}</AppLink>
							<AppLink to={AppRoutes.ABOUT}>{t('about_nav')}</AppLink>
						</ul>
					</nav>
					<Button
						onClick={onToggleModal}
						theme={ThemeButton.OUTLINED}
					>
						{t('login_button')}
					</Button>
					<ThemeSwitcher />
					<LangSwitcher />
				</div>
			</div>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				{t('Lorem ipsum dolor sit amet.')}
			</Modal>
		</header>
	);
};
