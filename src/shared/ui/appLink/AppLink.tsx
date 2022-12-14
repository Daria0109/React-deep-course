import { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

interface IOwnProps extends NavLinkProps {}

export const AppLink: FC<IOwnProps> = (props): JSX.Element => {
	const { to, children } = props;

	return (
		<li>
			<NavLink
				to={to}
				className={classNames(cls.navLink)}
			>
				{children}
			</NavLink>
		</li>

	);
};
