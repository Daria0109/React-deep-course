import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/Button';

function HomePage(): JSX.Element {
	const { t } = useTranslation('home');

	const onError = () => {
		throw new Error();
	};

	return (
		<div>
			{t('home')}
			<Button onClick={onError}>
				Make error
			</Button>
		</div>
	);
}

export default HomePage;
