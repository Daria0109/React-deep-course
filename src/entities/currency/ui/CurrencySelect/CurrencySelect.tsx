import { memo, useCallback } from 'react';
import { ISelectOptions, UserSelect } from 'shared/ui/select/Select';
import { useTranslation } from 'react-i18next';
import { Currency } from 'entities/currency';
import cls from './CurrencySelect.module.scss';

const currencyOptions = Object.values(Currency).map((value) => ({ value, label: value }));

interface IOwnProps {
	value: ISelectOptions;
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
		<UserSelect
			name="currency"
			label={t('choose_currency')}
			value={value}
			options={currencyOptions}
			onChange={onChangeCurrencyHandler}
			readonly={readonly}
			className={cls.select}
		/>
	);
});
