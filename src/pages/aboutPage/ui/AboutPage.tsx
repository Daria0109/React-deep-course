import { useTranslation } from 'react-i18next';

function AboutPage(): JSX.Element {
	const { t } = useTranslation('about');
	const s = [4, 9];

	return (
		<div>
			{ t('about') }
		</div>
	);
}

export default AboutPage;
