import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/Button';

const HomePage = (): JSX.Element => {
	const { t } = useTranslation('home');

	const onError = (): Error => {
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
};

export default HomePage;
