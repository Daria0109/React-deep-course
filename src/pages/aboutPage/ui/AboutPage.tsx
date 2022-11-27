import { useTranslation } from 'react-i18next';

const AboutPage = (): JSX.Element => {
	const { t } = useTranslation('about');
	
	return (
		<div>
			{t('translate')}
			{t('about')}
		</div>
	)
}

export default AboutPage;
