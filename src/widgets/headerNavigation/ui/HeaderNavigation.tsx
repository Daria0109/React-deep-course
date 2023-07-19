import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Logo } from 'shared/ui/logo/Logo';
import { ThemeSwitcher } from 'shared/ui/themeSwitcher/ThemeSwitcher';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import { LoginModal } from 'features/loginUser';
import { useDispatch, useSelector } from 'react-redux';
import { removeAuthData, selectAuthUserData } from 'entities/user';
import { MenuButton } from 'shared/ui/menuButton/MenuButton';
import { Sidebar } from 'widgets/sidebar';
import { LangSwitcher } from 'entities/language';
import cls from './HeaderNavigation.module.scss';

export const HeaderNavigation: FC = (): JSX.Element => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const [isSidebar, setIsSidebar] = useState(false);
	const authData = useSelector(selectAuthUserData);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowSidebar = useCallback(() => {
		setIsSidebar(true);
	}, []);

	const onCloseSidebar = useCallback(() => {
		setIsSidebar(false);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(removeAuthData());
	}, [dispatch]);

	return (
		<>
			<header className={classNames(cls.header)}>
				<div className={classNames(cls.header__wrapper)}>
					<Logo />
					{authData
						? (
							<div className={classNames(cls.header__main)}>
								<LangSwitcher />
								<ThemeSwitcher />
								<Button
									onClick={onLogout}
									theme={ThemeButton.OUTLINED}
								>
									{t('logout_button')}
								</Button>
								<MenuButton onClick={onShowSidebar} />
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
				{isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
			</header>
			<Sidebar isOpen={isSidebar} onClose={onCloseSidebar} />
		</>
	);
};
