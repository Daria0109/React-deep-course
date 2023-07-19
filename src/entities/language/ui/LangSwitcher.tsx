import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { UserSelect } from 'shared/ui/select/Select';
import { Language } from 'entities/language/model/types/language';
import cls from './LangSwitcher.module.scss';

export const LangSwitcher: FC = memo((): JSX.Element => {
	const { t, i18n } = useTranslation();

	const languagesOptions = useMemo(() => Object.entries(Language).map(([value, label]) => ({ value, label: t(label) })), [t]);

	const getValue = languagesOptions.find(({ value }) => value.toLowerCase() === i18n.language) ?? { value: 'en', label: t(Language.EN) };

	const onChangeLanguageHandler = useCallback((value?: string) => {
		i18n.changeLanguage(value?.toLowerCase());
	}, []);

	return (
		<UserSelect
			name="language"
			value={getValue}
			options={languagesOptions}
			onChange={onChangeLanguageHandler}
			className={cls.select}
		/>
	);
});
