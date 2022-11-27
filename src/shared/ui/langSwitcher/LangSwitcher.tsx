import { FC } from 'react';
import cls from './LangSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import { useTranslation } from 'react-i18next';

interface IOwnProps {
    className?: string;
}

export const LangSwitcher: FC<IOwnProps> = (props): JSX.Element => {
    const { className } = props;
	const { t, i18n } = useTranslation();
	
	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'be' : 'en')
	}

	return (
		<Button
			theme={ThemeButton.CLEAR}
			onClick={toggleLanguage}
			className={classNames(cls.langSwitcher, {}, [className])}
		>
			{t('lang')}
		</Button>
	);
}
