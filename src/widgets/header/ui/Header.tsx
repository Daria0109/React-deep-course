import { FC } from 'react';
import cls from './Header.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/appLink/AppLink';
import { AppRoutes } from 'shared/config/appRoutes/appRoutes';

interface IOwnProps {
}

export const Header: FC<IOwnProps> = (): JSX.Element => {
	return (
		<header className={classNames(cls.header)}>
			<div className={classNames(cls.content)}>
				<div className={classNames(cls.logo)}></div>
				<nav>
					<ul className={classNames(cls.navList)}>
						<AppLink to={AppRoutes.HOME}>Home</AppLink>
						<AppLink to={AppRoutes.ABOUT}>About</AppLink>
					</ul>
				</nav>
			</div>
		</header>
	);
};
