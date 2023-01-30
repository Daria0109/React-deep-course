import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear'
}

interface IOwnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button: FC<IOwnProps> = (props) => {
	const { theme, className, children, onClick } = props;

	return (
		<button
			type="button"
			onClick={onClick}
			className={classNames(cls.button, {}, [className, cls[theme]])}
		>
			{children}
		</button
		>
	);
};
