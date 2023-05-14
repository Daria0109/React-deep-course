import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/select/Select';
import { useTranslation } from 'react-i18next';
import { Currency } from 'entities/currency';

const currencyOptions = Object.values(Currency).map((value) => ({ value, content: value }));

interface IOwnProps {
	value?: string;
	readonly?: boolean;
	onChange?: (currency?: Currency) => void;
}

export const CurrencySelect = memo((props: IOwnProps): JSX.Element => {
	const { value, readonly, onChange } = props;
	const { t } = useTranslation();

	const onChangeCurrencyHandler = useCallback((value?: string) => {
		onChange?.(value as Currency);
	}, [onChange]);

	return (
		<Select
			label={t('choose_currency')}
			value={value}
			options={currencyOptions}
			onChange={onChangeCurrencyHandler}
			readonly={readonly}
		/>
	);
});
