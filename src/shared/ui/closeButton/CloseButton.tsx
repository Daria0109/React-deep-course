import { memo } from 'react';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CloseButton.module.scss';
import CloseIcon from '../../assets/icons/close.svg';

interface IOwnProps {
	className?: string;
    onClose?: () => void;
}

export const CloseButton = memo((props: IOwnProps): JSX.Element => {
	const { onClose, className } = props;

	return (
		<Button theme={ThemeButton.CLEAR} onClick={onClose} className={className}>
			<CloseIcon className={classNames(cls.closeIcon)} />
		</Button>
	);
});
