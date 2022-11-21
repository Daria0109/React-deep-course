import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
	CLEAR = 'clear'
}

interface IOwnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button: FC<IOwnProps> = (props): JSX.Element => {
	const { theme, className, children, ...otherProps } = props;
	
	return (
		<button
			{...otherProps}
			className={classNames(cls.button, {}, [className, cls[theme]])}
		>
			{children}
		</button>
	);
}
