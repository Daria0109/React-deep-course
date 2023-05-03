import { FC, FormEvent, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/input/Input';
import { useSelector } from 'react-redux';
import { loginByUsername } from 'features/loginUser/model/services/loginUser';
import { Text, TextTheme } from 'shared/ui/text/Text';
import { useDynamicModuleLoader } from 'shared/hooks';
import { ReducersList } from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { loginErrors } from 'shared/constants/serverErrors';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { selectError, selectIsLoading, selectPassword, selectUsername } from '../../model/selectors/loginSelectors';

interface IOwnProps {
	onSuccess: () => void;
    className?: string;
}

const initialReducers: ReducersList = { login: loginReducer };

const LoginForm: FC<IOwnProps> = ({ onSuccess, className }): JSX.Element => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const username = useSelector(selectUsername);
	const password = useSelector(selectPassword);
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);

	useDynamicModuleLoader(initialReducers, true);

	const onChangeUsername = useCallback((value: string): void => {
		dispatch(loginActions.setUsername(value));
	}, [dispatch]);

	const onChangePassword = useCallback((value: string): void => {
		dispatch(loginActions.setPassword(value));
	}, [dispatch]);

	const onSubmitLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();

		const result = await dispatch(loginByUsername({ username, password }));

		if (result.meta.requestStatus === 'fulfilled') {
			onSuccess();
		}
	};

	return (
		<form
			onSubmit={onSubmitLogin}
			className={classNames(cls.form, {}, [className])}
		>
			<Text title={t('login_title')} />
			{error ? <Text text={t(loginErrors[error])} theme={TextTheme.ERROR} /> : null}
			<Input
				id="username"
				type="text"
				value={username}
				onChange={onChangeUsername}
				className={cls.form__input}
			/>
			<Input
				id="password"
				type="text"
				value={password}
				onChange={onChangePassword}
				className={cls.form__input}
			/>
			<Button
				submit
				disabled={isLoading}
				className={cls.form__login}
			>
				{t('login_button')}
			</Button>
		</form>
	);
};

export default LoginForm;
