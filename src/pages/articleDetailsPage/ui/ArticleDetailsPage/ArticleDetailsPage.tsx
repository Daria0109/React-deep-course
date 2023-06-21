import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface IOwnProps {
	className?: string;
}

const ArticleDetailsPage = (props: IOwnProps): JSX.Element => {
	const { className } = props;
	const { t } = useTranslation();

	return (
		<div className={classNames('', {}, [className])}>
			{t('Article Details Page')}
		</div>
	);
};

export default memo(ArticleDetailsPage);
