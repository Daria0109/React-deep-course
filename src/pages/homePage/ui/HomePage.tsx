// noinspection AllyJsxUnregisteredKeyInspection

import { useTranslation } from 'react-i18next';

function HomePage(): JSX.Element {
    const { t } = useTranslation('home');

    return (
        <div>
            {t('home')}
        </div>
    );
}

export default HomePage;
