import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo } from 'react';
import cls from './Select.module.scss';

export interface ISelectOptions {
	value: string;
	content: string;
}

interface IOwnProps {
	label?: string;
	options?: ISelectOptions[];
	value?: string;
	readonly?: boolean;
	onChange?: (value?: string) => void;
    className?: string;
}

export const Select = memo((props: IOwnProps): JSX.Element => {
	const { label, options, value, readonly, onChange, className } = props;

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
		onChange?.(e.target.value);
	};

	return (
		<div className={classNames(cls.select__wrapper, {}, [className])}>
			{label && (
				<span className={cls.select__label}>
					{label}
				</span>
			)}
			<select
				className={cls.select}
				value={value}
				onChange={onChangeHandler}
				disabled={readonly}
			>
				{options?.map(({ value, content }) => (
					<option key={value}>{content}</option>
				))}
			</select>
		</div>
	);
});
