import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/button/Button';
import { useTranslation } from 'react-i18next';
import { FallbackProps } from 'react-error-boundary';

interface IOwnProps extends FallbackProps{
    className?: string;
}

export const ErrorFallback = memo((props: IOwnProps): JSX.Element => {
	const { className, resetErrorBoundary } = props;
	const { t } = useTranslation();

	return (
		<div className={classNames('', {}, [className])}>
			<h1>
				{t('error_fallback_title')}
			</h1>
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<Button onClick={resetErrorBoundary}>Skip error</Button>
		</div>
	);
});
