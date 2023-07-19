import { memo, useCallback } from 'react';
import { ISelectOptions, UserSelect } from 'shared/ui/select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/country';
import cls from './CountrySelect.module.scss';

const countryOptions = Object.values(Country).map((value) => ({ value, label: value }));

interface IOwnProps {
	value: ISelectOptions;
	readonly?: boolean;
	onChange?: (country?: Country) => void;
}

export const CountrySelect = memo((props: IOwnProps): JSX.Element => {
	const { value, readonly, onChange } = props;
	const { t } = useTranslation();

	const onChangeCountryHandler = useCallback((value?: string) => {
		onChange?.(value as Country);
	}, [onChange]);

	return (
		<UserSelect
			name="country"
			label={t('choose_country')}
			value={value}
			options={countryOptions}
			onChange={onChangeCountryHandler}
			readonly={readonly}
			className={cls.select}
		/>
	);
});
