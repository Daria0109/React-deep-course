import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/input/Input';
import cls from './LoginForm.module.scss';

interface IOwnProps {
    className?: string;
}

export const LoginForm: FC<IOwnProps> = (props): JSX.Element => {
	const { t } = useTranslation();

	const { className } = props;

	return (
		<form className={classNames(cls.form, {}, [className])}>
			<Input type="text" className={cls.form__input} />
			<Input type="text" className={cls.form__input} />
			<Button submit className={cls.form__login}>{t('login_button')}</Button>
		</form>
	);
};
