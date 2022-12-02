import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface IOwnProps {
    className?: string;
}

export const NotFoundPage: FC<IOwnProps> = (props): JSX.Element => {
	const { className } = props;
	const { t } = useTranslation('notFound');

	return (
		<div className={classNames(cls.notFoundPage, {}, [className])}>
			{t('not_found')}
		</div>
	);
};
