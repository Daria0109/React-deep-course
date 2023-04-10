import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
	OUTLINED = 'outlined'
}

interface IOwnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
	submit?: boolean;
}

export const Button: FC<IOwnProps> = (
	{
		theme,
		className,
		children,
		onClick,
		submit
	}
) => (
	<button
		type={submit ? 'submit' : 'button'}
		onClick={onClick}
		className={classNames(cls.button, {}, [className, cls[theme]])}
	>
		{children}
	</button
	>
);
