import { FC } from 'react';
import { Modal } from 'shared/ui/modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface IOwnProps {
    className?: string;
	isOpen?: boolean;
	onClose?: () => void;
}

export const LoginModal: FC<IOwnProps> = ({ isOpen, onClose,  className }): JSX.Element => (
	<Modal
		lazy
		isOpen={isOpen}
		onClose={onClose}
	>
		<LoginForm />
	</Modal>
);
