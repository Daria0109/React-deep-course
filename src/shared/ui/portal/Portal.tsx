import { FC } from 'react';
import { createPortal } from 'react-dom';

interface IOwnProps {
	element?: HTMLElement;
}

export const Portal: FC<IOwnProps> = (
	{
		children,
		element = document.body
	}
) => createPortal(children, element);

