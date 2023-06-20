import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface IOwnProps {
	className?: string;
}

const ArticlesPage = (props: IOwnProps): JSX.Element => {
	const { className } = props;
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.ArticlesPage, {}, [className])}>
			{t('Articles Page')}
		</div>
	);
};

export default memo(ArticlesPage);
