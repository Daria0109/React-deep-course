import React, { InputHTMLAttributes, memo } from 'react';
import { classNames, Modes } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'readOnly' | 'type' | 'value'>;
interface IOwnProps extends HTMLInputProps {
	id?: string;
	value?: number | string;
	onChange?: (value: string) => void;
	label?: string;
	type?: string;
	readonly?: boolean;
	className?: string;
}

export const Input = memo((props: IOwnProps): JSX.Element => {
	const {
		id,
		value,
		onChange,
		className,
		label,
		type = 'text',
		readonly,
		...otherProps
	} = props;
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange?.(e.target.value);
	};

	const mods: Modes = {
		[cls.input_readonly]: readonly
	};

	return (
		<div className={classNames(cls.input, mods, [className])}>
			{label ? <label htmlFor={id}>{label}</label> : null}
			<input
				id={id}
				type={type}
				value={value}
				onChange={onChangeHandler}
				className={classNames(cls.input__field, {}, [className])}
				readOnly={readonly}
				{...otherProps}
			/>
		</div>
	);
});
