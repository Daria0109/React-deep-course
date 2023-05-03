import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Logo } from 'shared/ui/logo/Logo';
import { ThemeSwitcher } from 'shared/ui/themeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/langSwitcher/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import { LoginModal } from 'features/loginUser';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserData } from 'entities/user/model/selectors/userSelectors';
import { removeAuthData } from 'entities/user';
import { NavigationItemsList } from 'widgets/sidebar/model/items';
import { NavigationItem } from 'widgets/sidebar/ui/NavigationItem/NavigationItem';
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
									{NavigationItemsList.map((item) => (
										<NavigationItem key={item.path} item={item} />
									))}
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
			{isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
		</header>
	);
};
