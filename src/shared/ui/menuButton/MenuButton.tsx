import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import cls from './MenuButton.module.scss';

interface IOwnProps {
	onClick?: () => void;
}

export const MenuButton = memo((props: IOwnProps) => {
	const { onClick } = props;

	return (
		<Button theme={ThemeButton.CLEAR} onClick={onClick}>
			<div className={classNames(cls.menuButton)}>
				<span />
			</div>
		</Button>
	);
});
