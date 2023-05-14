import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/country';

const countryOptions = Object.values(Country).map((value) => ({ value, content: value }));

interface IOwnProps {
	value?: string;
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
		<Select
			label={t('choose_country')}
			value={value}
			options={countryOptions}
			onChange={onChangeCountryHandler}
			readonly={readonly}
		/>
	);
});
