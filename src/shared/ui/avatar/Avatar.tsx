import { CSSProperties } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface IOwnProps {
	src: string;
	alt: string;
	size?: number;
    className?: string;
}

export const Avatar = (props: IOwnProps): JSX.Element => {
	const { src, alt, size, className } = props;

	const styles: CSSProperties = {
		width: size || 100,
		height: size || 100
	};

	return (
		<img
			src={src}
			alt={alt}
			style={styles}
			className={classNames(cls.avatar, {}, [className])}
		/>
	);
};
