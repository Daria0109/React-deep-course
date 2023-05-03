import { FC, memo } from 'react';
import { AppLink } from 'shared/ui/appLink/AppLink';
import { useTranslation } from 'react-i18next';
import { INavigationItem } from '../../model/items';

interface IOwnProps {
	item: INavigationItem;
}

export const NavigationItem = memo((props: IOwnProps): JSX.Element => {
	const { item } = props;
	const { t } = useTranslation();

	return (
		<AppLink to={item.path}>{t(item.text)}</AppLink>
	);
});
