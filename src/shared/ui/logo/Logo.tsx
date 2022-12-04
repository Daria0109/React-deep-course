import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { Theme } from 'app/providers/themeProvider/lib/ThemeContext';
import { AppRoutes } from 'shared/config/appRoutes/appRoutes';
import { NavLink } from 'react-router-dom';
import LogoDark from '../../assets/images/Logo-dark.svg';
import LogoLight from '../../assets/images/Logo-light.svg';
import cls from './Logo.module.scss';

interface IOwnProps {
    className?: string;
}

export const Logo: FC<IOwnProps> = (props): JSX.Element => {
	const { className } = props;
	const { theme } = useTheme();

	return (
		<NavLink to={AppRoutes.HOME} className={classNames(cls.logo, {}, [className])}>
			{theme === Theme.DEFAULT ? <LogoLight /> : <LogoDark />}
		</NavLink>
	);
};
