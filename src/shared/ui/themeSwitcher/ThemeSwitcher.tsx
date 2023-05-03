import { FC, memo } from 'react';
import { useTheme } from 'app/providers/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import ThemeIcon from '../../assets/icons/theme.svg';
import cls from './ThemeSwitcher.module.scss';

export const ThemeSwitcher: FC = memo((): JSX.Element => {
	const { toggleTheme } = useTheme();

	return (
		<Button onClick={toggleTheme} theme={ThemeButton.CLEAR}>
			<ThemeIcon className={classNames(cls.themeIcon)} />
		</Button>
	);
});
