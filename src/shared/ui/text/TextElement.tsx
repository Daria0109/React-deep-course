import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error'
}

export enum TextAlignment {
	LEFT = 'left',
	RIGHT = 'right',
	CENTER = 'center',
}

interface IOwnProps {
    className?: string;
	title?: string;
	text?: string;
	theme?: TextTheme;
	align?: TextAlignment;
}

export const TextElement = memo((props: IOwnProps): JSX.Element => {
	const { title, text, theme = TextTheme.PRIMARY, align = TextAlignment.LEFT, className } = props;

	const mods = {
		[cls[theme]]: true,
		[cls[align]]: true
	};

	return (
		<div className={classNames('', mods, [className])}>
			{title && <p className={classNames(cls.title, {})}>{title}</p>}
			{text && <p className={classNames(cls.text, {})}>{text}</p>}
		</div>
	);
});
