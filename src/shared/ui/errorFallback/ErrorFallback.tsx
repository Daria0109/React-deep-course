import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/button/Button';
import { useTranslation } from 'react-i18next';
import { FallbackProps } from 'react-error-boundary';
import cls from './ErrorFallback.module.scss';

interface IOwnProps extends FallbackProps{
    className?: string;
}

export const ErrorFallback: FC<IOwnProps> = (props): JSX.Element => {
	const { className, resetErrorBoundary } = props;
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.errorFallback, {}, [className])}>
			<h1>
				{t('error_fallback_title')}
			</h1>
			<Button onClick={resetErrorBoundary}>Skip error</Button>
		</div>
	);
};
