import { memo } from 'react';
import Select from 'react-select';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface ISelectOptions {
	value: string;
	label: string;
}

interface IOwnProps {
	name: string;
	value: ISelectOptions;
	label?: string;
	options?: ISelectOptions[];
	readonly?: boolean;
	isLoading?: boolean;
	isClearable?: boolean;
	isSearchable?: boolean;
	onChange?: (value?: string) => void;
    className?: string;
}

export const UserSelect = memo((props: IOwnProps): JSX.Element => {
	const { name, label, options, value, readonly, isLoading, isClearable, isSearchable, onChange, className } = props;

	const onChangeHandler = (option: ISelectOptions | null): void => {
		onChange?.(option?.value);
	};

	return (
		<div>
			{label && (
				<span className={cls.select__label}>
					{label}
				</span>
			)}

			<Select
				name={name}
				className={classNames('', {}, [className])}
				classNamePrefix="select"
				value={value}
				options={options}
				isDisabled={readonly}
				isLoading={isLoading}
				isClearable={isClearable}
				isSearchable={isSearchable}
				onChange={onChangeHandler}
				menuPlacement="auto"
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						borderRadius: 'unset',
						backgroundColor: 'var(--bg-color)',
						borderColor: state.isFocused ? 'var(--primary-color)' : '#A5A5A5',
						boxShadow: 'none',
						cursor: 'pointer'
					}),
					menu: (baseStyles) => ({
						...baseStyles,
						borderRadius: 'unset',
						backgroundColor: 'var(--primary-color)'
					}),
					singleValue: (baseStyles) => ({
						...baseStyles,
						color: 'var(--primary-color)'
					}),
					option: (baseStyles, state) => ({
						...baseStyles,
						color: state.isSelected ? 'var(--bg-primary)' : 'var(--bg-color)',
						backgroundColor: state.isFocused
							? '#A5A5A5'
							: state.isSelected ? '#2B2B2B' : 'var(--primary-color)',
						cursor: state.isSelected ? 'default' : 'pointer'
					})
				}}
			/>
		</div>
	);
});
