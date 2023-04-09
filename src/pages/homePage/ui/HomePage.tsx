import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/counter';

const HomePage = (): JSX.Element => {
	const { t } = useTranslation('home');

	return (
		<div>
			{t('home')}
			<Counter />
		</div>
	);
};

export default HomePage;
