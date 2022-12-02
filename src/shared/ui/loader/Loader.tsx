import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface IOwnProps {
    className?: string;
}

export const Loader: FC<IOwnProps> = (props): JSX.Element => {
	const { className } = props;

	return (
		<div className={classNames(cls.ldsEllipsis, {}, [className])}>
			<div />
			<div />
			<div />
			<div />
		</div>
	);
};
