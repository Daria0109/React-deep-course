import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error'
}

interface IOwnProps {
    className?: string;
	title?: string;
	text?: string;
	theme?: TextTheme;
}

export const Text: FC<IOwnProps> = ({ title, text, theme = TextTheme.PRIMARY, className }): JSX.Element => (
	<div className={classNames(cls[theme], {}, [className])}>
		{title && <p className={classNames(cls.title, {})}>{title}</p>}
		{text && <p className={classNames(cls.text, {})}>{text}</p>}
	</div>
);
