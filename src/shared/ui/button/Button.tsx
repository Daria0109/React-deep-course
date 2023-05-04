import { ButtonHTMLAttributes, memo } from 'react';
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
	disabled?: boolean;
}

export const Button = memo((props: IOwnProps) => {
	const { theme = ThemeButton.OUTLINED,
		className,
		children,
		onClick,
		submit,
		disabled } = props;

	return (
		<button
			type={submit ? 'submit' : 'button'}
			onClick={onClick}
			disabled={disabled}
			className={classNames(
				cls.button,
				{ [cls.buttonDisabled]: disabled },
				[className, cls[theme]]
			)}
		>
			{children}
		</button>
	);
});
