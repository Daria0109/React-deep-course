import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/portal/Portal';
import { useTheme } from 'app/providers/themeProvider';
import cls from './Modal.module.scss';

interface IOwnProps {
	className?: string;
	isOpen?: boolean;
	onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<IOwnProps> = (
	{
		children,
		className,
		isOpen,
		onClose
	}
) => {
	const { theme } = useTheme();

	const [isClosing, setIsClosing] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	useEffect(() => () => clearTimeout(timerRef.current), [isOpen]);

	const handleModalClose = (): void => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	};

	const handleContentClose = (event: MouseEvent): void => {
		event.stopPropagation();
	};

	const mods: Record<string, boolean> = {
		[cls.modal__content_opened]: isOpen,
		[cls.modal__content_closing]: isClosing
	};

	return (
		<Portal>
			<div className={classNames(cls.modal, { [cls.modal_opened]: isOpen }, [className])}>
				{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
				<div className={cls.modal__overlay} onClick={handleModalClose}>
					{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
					<div
						role="button"
						onClick={handleContentClose}
						className={classNames(cls.modal__content, mods, [theme])}
					>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
