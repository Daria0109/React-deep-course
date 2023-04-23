import { FC, Suspense } from 'react';
import { Modal } from 'shared/ui/modal/Modal';
import { Loader } from 'shared/ui/loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.lazy';

interface IOwnProps {
	isOpen?: boolean;
	onClose?: () => void;
}

export const LoginModal: FC<IOwnProps> = ({ isOpen, onClose }): JSX.Element => (
	<Modal
		lazy
		isOpen={isOpen}
		onClose={onClose}
	>
		<Suspense fallback={<Loader />}>
			<LoginFormAsync />
		</Suspense>
	</Modal>
);
