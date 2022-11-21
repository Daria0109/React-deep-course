import { FC } from 'react';
import { useTheme } from 'app/providers/themeProvider';
import ThemeIcon from './../../assets/icons/theme.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { Button, ThemeButton } from 'shared/ui/button/Button';

export const ThemeSwitcher: FC = (): JSX.Element => {
	const { toggleTheme } = useTheme();
	
	return (
		<Button onClick={toggleTheme} theme={ThemeButton.CLEAR}>
			<ThemeIcon className={classNames(cls.themeIcon)} />
		</Button>
	);
};
