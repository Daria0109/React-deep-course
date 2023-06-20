import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleDetailsPage.module.scss';

interface IOwnProps {
	className?: string;
}

const ArticleDetailsPage = (props: IOwnProps): JSX.Element => {
	const { className } = props;
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
			{t('Article Details Page')}
		</div>
	);
};

export default memo(ArticleDetailsPage);
