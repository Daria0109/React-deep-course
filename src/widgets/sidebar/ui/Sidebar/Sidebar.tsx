import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavigationItemsList } from 'widgets/sidebar/model/items';
import { NavigationItem } from 'widgets/sidebar/ui/NavigationItem/NavigationItem';
import { Portal } from 'shared/ui/portal/Portal';
import { CloseButton } from 'shared/ui/closeButton/CloseButton';
import cls from './Sidebar.module.scss';

interface IOwnProps {
	isOpen: boolean;
	onClose?: () => void;
}

export const Sidebar = memo((props: IOwnProps): JSX.Element => {
	const { isOpen, onClose } = props;

	return (
		<Portal>
			<div className={classNames(cls.sidebar, { [cls.sidebar_opened]: isOpen })}>
				<CloseButton onClose={onClose} className={classNames(cls.sidebar__closeButton)} />
				<nav>
					<ul className={classNames(cls.sidebar__navList)}>
						{NavigationItemsList.map((item) => (
							<NavigationItem key={item.path} item={item} />
						))}
					</ul>
				</nav>
			</div>
		</Portal>
	);
});
