import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/loader/Loader';
import cls from './PageLoader.module.scss';

interface IOwnProps {
    className?: string;
}

export const PageLoader: FC<IOwnProps> = (props): JSX.Element => {
	const { className } = props;

	return (
		<div className={classNames(cls.loader, {}, [className])}>
			<Loader />
		</div>
	);
};
