import { useTranslation } from 'react-i18next';

function AboutPage(): JSX.Element {
	const { t } = useTranslation('about');

	return (
		<div>
			{ t('about') }
		</div>
	);
}

export default AboutPage;
